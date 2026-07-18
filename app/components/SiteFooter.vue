<script setup lang="ts">
import { siteConfig } from "#shared/site"

const socials = [
  { name: "Instagram", icon: "i-simple-icons-instagram", url: "https://instagram.com/udstqatar" },
  { name: "X", icon: "i-simple-icons-x", url: "https://x.com/udstqatar" },
  { name: "TikTok", icon: "i-simple-icons-tiktok", url: "https://tiktok.com/@udstqatar" },
  { name: "Discord", icon: "i-simple-icons-discord", url: "https://discord.gg/udstqatar" },
  { name: "YouTube", icon: "i-simple-icons-youtube", url: "https://youtube.com/udstqatar" },
]
</script>

<template>
  <footer class="relative mt-16 border-t-2 border-ink bg-paper-warm">
    <div class="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <div class="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
        <div class="text-center md:text-left">
          <p class="font-display text-lg font-black tracking-wide text-ink">
            UDST WOLVES <span class="text-royal">× ESPORTS CAMP</span>
          </p>
          <p class="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
            August 2 – 16, 2026 · E-Sports Arena,
            UDST · Building 18
          </p>
          <p class="mt-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-soft">
            In collaboration with <span class="text-gold">NXT LEVEL</span>
          </p>
        </div>

        <div class="flex flex-col items-center gap-5 md:items-end">
          <div class="flex items-center gap-2.5">
            <a
              v-for="s in socials"
              :key="s.name"
              :href="s.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Follow us on ${s.name}`"
              class="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-ink bg-card text-ink shadow-[3px_3px_0_0_var(--color-ink)] transition-transform hover:-translate-y-0.5 hover:text-royal"
            >
              <UIcon :name="s.icon" class="h-4 w-4" />
            </a>
          </div>
          <nav class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-ink-soft">
            <NuxtLink to="/register" class="hover:text-royal">Register</NuxtLink>
            <NuxtLink to="/privacy" class="hover:text-royal">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms" class="hover:text-royal">Terms &amp; Conditions</NuxtLink>
          </nav>
        </div>
      </div>

      <hr class="print-divider my-8" />
      <p class="text-center text-xs text-ink-soft">
        © {{ new Date().getFullYear() }} University of Doha for Science &amp; Technology —
        UDST Wolves Esports. All rights reserved.
      </p>
    </div>
  </footer>
</template>
