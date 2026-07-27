import { google } from 'googleapis'
import { Filter } from 'bad-words'
import { checkRateLimit } from './_rateLimit.js'

function decodeBase64Json(b64) {
    if (!b64) return null
    try {
        const json = Buffer.from(b64, 'base64').toString('utf8')
        return JSON.parse(json)
    } catch {
        return null
    }
}

let sheetsClient
let credentials

async function getSheetsClient() {
    if (sheetsClient && credentials) return { sheetsClient, credentials }

    credentials = decodeBase64Json(process.env.GOOGLE_CREDENTIALS_BASE64 || '')
    if (!credentials) {
        throw new Error('GOOGLE_CREDENTIALS_BASE64 env var is missing or invalid Base64 JSON')
    }
    if (!credentials.sheet_id) {
        throw new Error('sheet_id is missing inside GOOGLE_CREDENTIALS_BASE64 JSON')
    }

    const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
    const authClient = await auth.getClient()
    sheetsClient = google.sheets({ version: 'v4', auth: authClient })
    return { sheetsClient, credentials }
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' })
        return
    }

    if (!checkRateLimit(req, 5, 15 * 60 * 1000)) {
        res.status(429).json({ error: 'Too many requests. Please try again later.' })
        return
    }

    const {
        name = '',
        email = '',
        phone = '',
        product = 'Wini Desktop Robot',
        role = 'Parent for My Child',
        childAge = 'N/A',
        notes = '',
    } = req.body || {}

    if (!name || !email) {
        res.status(400).json({ error: 'Missing required fields' })
        return
    }

    const filter = new Filter()
    if (filter.isProfane(name) || filter.isProfane(notes)) {
        res.status(400).json({ error: 'Profanity detected' })
        return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
        res.status(400).json({ error: 'Invalid email' })
        return
    }

    const submitDate = new Date()
    const timestamp = submitDate.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata',
    })

    try {
        const { sheetsClient: sheets, credentials: creds } = await getSheetsClient()

        await sheets.spreadsheets.values.append({
            spreadsheetId: creds.sheet_id,
            range: 'Reservations!A:I',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[timestamp, name, email, phone || 'N/A', product, role, childAge, notes || 'None', 'Pending Pre-order']],
            },
        })

        res.status(200).json({ ok: true })
    } catch (err) {
        console.error('Google Sheets Reservation Write Error:', err)
        res.status(500).json({ error: err.message || 'Reservation sheet write failed' })
    }
}

export const config = { api: { bodyParser: true } }
