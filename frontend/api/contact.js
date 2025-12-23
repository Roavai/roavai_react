// api/contact.js
import { google } from 'googleapis'


function decodeBase64Json(b64) {
    const json = Buffer.from(b64, 'base64').toString('utf8')
    return JSON.parse(json)
}

let sheetsClient
let credentials

async function getSheetsClient() {
    if (sheetsClient) return sheetsClient

    credentials = decodeBase64Json(process.env.GOOGLE_CREDENTIALS_BASE64 || '')
    const auth = new google.auth.GoogleAuth({
        credentials, // use the outer variable
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
    const authClient = await auth.getClient()
    sheetsClient = google.sheets({ version: 'v4', auth: authClient })
    return sheetsClient
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' })
        return
    }


    const { name = '', email = '', message = '' } = req.body || {}

    // Basic validation
    if (!name || !email || !message) {
        res.status(400).json({ error: 'Missing fields' })
        return
    }
    if (name.length > 80 || message.length > 1000) {
        res.status(400).json({ error: 'Too long' })
        return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
        res.status(400).json({ error: 'Invalid email' })
        return
    }

    const submitDate = new Date()

    const timestamp = submitDate.toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    })

    try {
        const sheets = await getSheetsClient()
        const sheetId = credentials.sheet_id

        await sheets.spreadsheets.values.append({
            spreadsheetId: sheetId,
            range: 'Sheet1!A:D',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[timestamp, name, email, message]],
            },
        })

        res.status(200).json({ ok: true })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Sheet write failed' })
    }
}

export const config = { api: { bodyParser: true } }
