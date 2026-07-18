import { defineEventHandler, setResponseHeader } from "h3"
import { useRuntimeConfig } from "nitropack/runtime"

export default defineEventHandler((event) => {
  const siteUrl = useRuntimeConfig(event).public.siteUrl
  setResponseHeader(event, "Content-Type", "text/plain")
  return `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${siteUrl}/sitemap.xml
`
})
