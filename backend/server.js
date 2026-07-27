const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");

require("dotenv").config();

const app = express();

app.use(cors({ origin: process.env.ALLOWED_ORIGIN || "http://localhost:5173" }));

app.use(express.json());

// In-memory rate limiting middleware
const requestCounts = new Map();
const rateLimiter = (limit = 5, windowMs = 15 * 60 * 1000) => (req, res, next) => {
  const ip = req.ip || req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.socket.remoteAddress || "127.0.0.1";
  const now = Date.now();
  const record = requestCounts.get(ip) || { count: 0, resetTime: now + windowMs };

  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + windowMs;
  } else {
    record.count += 1;
  }

  requestCounts.set(ip, record);

  if (record.count > limit) {
    return res.status(429).json({ error: "Too many requests. Please try again later." });
  }
  next();
};

// 1. Contact Us Endpoint
app.post("/api/contact", rateLimiter(5), async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const { Filter } = await import("bad-words");
  const filter = new Filter();
  if (filter.isProfane(message) || filter.isProfane(name)) {
    return res.status(400).json({ error: "Profanity detected" });
  }

  try {
    const credentials = JSON.parse(
      Buffer.from(process.env.GOOGLE_CREDENTIALS_BASE64, "base64").toString("utf8")
    );

    const submitDate = new Date();
    const timestamp = submitDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    });

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: credentials.sheet_id,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, name, email, message]],
      },
    });

    res.json({ message: "Success!" });
  } catch (error) {
    console.error("Express Contact API Error:", error);
    res.status(500).json({ error: "An unexpected error occurred. Please try again later." });
  }
});

// 2. Dedicated Product Reservation Endpoint
app.post("/api/reserve", rateLimiter(5), async (req, res) => {
  const {
    name = "",
    email = "",
    phone = "",
    product = "Wini Desktop Robot",
    role = "Parent for My Child",
    childAge = "N/A",
    notes = "",
  } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const { Filter } = await import("bad-words");
  const filter = new Filter();
  if (filter.isProfane(name) || filter.isProfane(notes)) {
    return res.status(400).json({ error: "Profanity detected" });
  }

  try {
    const credentials = JSON.parse(
      Buffer.from(process.env.GOOGLE_CREDENTIALS_BASE64, "base64").toString("utf8")
    );

    const submitDate = new Date();
    const timestamp = submitDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    });

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: credentials.sheet_id,
      range: "Reservations!A:I",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, name, email, phone || "N/A", product, role, childAge, notes || "None", "Pending Pre-order"]],
      },
    });

    res.json({ message: "Reservation Success!" });
  } catch (error) {
    console.error("Express Reservation API Error:", error);
    res.status(500).json({ error: "An unexpected error occurred. Please try again later." });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
