// In-memory sliding window rate limiter for API routes
const tracker = new Map()

/**
 * Rates limit requests based on client IP.
 * @param {object} req - HTTP request object
 * @param {number} limit - Maximum requests allowed in the window (default: 5)
 * @param {number} windowMs - Time window in milliseconds (default: 15 minutes = 900,000 ms)
 * @returns {boolean} - Returns true if request is allowed, false if rate limited.
 */
export function checkRateLimit(req, limit = 5, windowMs = 15 * 60 * 1000) {
    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
               req.headers['x-real-ip'] ||
               req.socket?.remoteAddress ||
               '127.0.0.1'

    const now = Date.now()
    const clientData = tracker.get(ip) || { count: 0, resetTime: now + windowMs }

    if (now > clientData.resetTime) {
        clientData.count = 1
        clientData.resetTime = now + windowMs
    } else {
        clientData.count += 1
    }

    tracker.set(ip, clientData)

    // Periodic cleanup of expired entries (runs probabilistically)
    if (Math.random() < 0.1) {
        for (const [k, v] of tracker.entries()) {
            if (now > v.resetTime) tracker.delete(k)
        }
    }

    return clientData.count <= limit
}
