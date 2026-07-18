import { defineEventHandler, setResponseHeader } from "h3"
import { useRuntimeConfig } from "nitropack/runtime"

export default defineEventHandler((event) => {
  const siteUrl = useRuntimeConfig(event).public.siteUrl
  const pages = ["", "/register", "/privacy", "/terms"]
  const lastmod = new Date().toISOString().slice(0, 10)

  setResponseHeader(event, "Content-Type", "application/xml")
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${siteUrl}${p}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>
`
})
