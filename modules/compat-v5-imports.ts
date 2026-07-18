import { defineNuxtModule, addTemplate } from "nuxt/kit"

/**
 * Workaround for `future.compatibilityVersion: 5` on Nuxt 4.4.x:
 * the v5 build-dir layout no longer emits `<buildDir>/imports.mjs`,
 * but Nitro still aliases `#imports` there for server files inside
 * node_modules (e.g. @nuxt/icon's API handler). Re-create the file
 * as a re-export of the Nitro runtime, which provides everything
 * those handlers use (useAppConfig, defineCachedEventHandler, …).
 */
export default defineNuxtModule({
  meta: { name: "compat-v5-imports" },
  setup() {
    // Nitro's alias is extensionless (`<buildDir>/imports`), so emit both.
    for (const filename of ["imports", "imports.mjs"]) {
      addTemplate({
        filename,
        write: true,
        getContents: () => 'export * from "nitropack/runtime"\n',
      })
    }
  },
})
