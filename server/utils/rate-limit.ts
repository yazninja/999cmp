/**
 * Lightweight in-memory rate limiter (sliding window).
 * Suitable for a single server instance / small deployments.
 * For high-traffic production use, swap for Upstash Redis or similar.
 */

type Window = { count: number; resetAt: number }

const buckets = new Map<string, Window>()

const WINDOW_MS = 60_000 // 1 minute
const MAX_REQUESTS = 5 // max submissions per IP per window

export function rateLimit(identifier: string): { allowed: boolean; retryAfterSec: number } {
  const now = Date.now()
  const bucket = buckets.get(identifier)

  // Opportunistic cleanup so the map doesn't grow unbounded
  if (buckets.size > 5_000) {
    for (const [key, win] of buckets) {
      if (win.resetAt < now) buckets.delete(key)
    }
  }

  if (!bucket || bucket.resetAt < now) {
    buckets.set(identifier, { count: 1, resetAt: now + WINDOW_MS })
    return { allowed: true, retryAfterSec: 0 }
  }

  bucket.count += 1
  if (bucket.count > MAX_REQUESTS) {
    return { allowed: false, retryAfterSec: Math.ceil((bucket.resetAt - now) / 1000) }
  }
  return { allowed: true, retryAfterSec: 0 }
}
