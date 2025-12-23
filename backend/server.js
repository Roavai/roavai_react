// import "dotenv/config";
const express = require("express");
const cors = require('cors')
const { google } = require("googleapis");
require("dotenv").config();

const app = express();

app.use(cors({ origin: 'http://localhost:5173' })) // allow your Vite dev URL

app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const credentials = JSON.parse(
      Buffer.from(process.env.GOOGLE_CREDENTIALS_BASE64, "base64").toString(
        "utf8"
      )
    );

    // const sheetId = Buffer.from(process.env.SHEET_ID_BASE64, "base64").toString(
    //   "utf8"
    // );

    const submitDate = new Date();

    const timestamp = submitDate.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: credentials.sheet_id,
      range: "Sheet1!A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, name, email, message]],
      },
    });

    res.json({ message: "Success!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Server error" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
