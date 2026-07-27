// api/contact.js
import { google } from 'googleapis'
import { Filter } from 'bad-words'
import { checkRateLimit } from './_rateLimit.js'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' })
        return
    }

    if (!checkRateLimit(req, 5, 15 * 60 * 1000)) {
        res.status(429).json({ error: 'Too many requests. Please try again later.' })
        return
    }


    const { name = '', email = '', message = '' } = req.body || {}

    // Basic validation
    if (!name || !email || !message) {
        res.status(400).json({ error: 'Missing fields' })
        return
    }

    const filter = new Filter()
    if (filter.isProfane(message) || filter.isProfane(name)) {
        res.status(400).json({ error: 'Profanity detected' })
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
