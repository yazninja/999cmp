<script setup lang="ts">
import { siteConfig } from "#shared/site"

const contactItems = [
  {
    icon: "i-lucide-mail",
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    external: false,
  },
  {
    icon: "i-lucide-phone",
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
    external: false,
  },
  {
    icon: "i-lucide-map-pin",
    label: "Location",
    value: siteConfig.contact.location,
    href: siteConfig.location.mapsLink,
    external: true,
  },
]

const socials = [
  { name: "Instagram", icon: "i-simple-icons-instagram", url: siteConfig.social.instagram },
  { name: "X", icon: "i-simple-icons-x", url: siteConfig.social.twitter },
  { name: "TikTok", icon: "i-simple-icons-tiktok", url: siteConfig.social.tiktok },
  { name: "Discord", icon: "i-simple-icons-discord", url: siteConfig.social.discord },
  { name: "YouTube", icon: "i-simple-icons-youtube", url: siteConfig.social.youtube },
]
</script>

<template>
  <section id="contact" class="relative scroll-mt-24 py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div v-reveal class="text-center">
        <p class="kicker">Get in Touch · تواصل معنا</p>
        <h2 class="mt-4 font-display text-3xl font-black uppercase tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Contact <span class="marker-royal">the team</span>
        </h2>
      </div>

      <div class="mt-14 grid gap-8 lg:grid-cols-2">
        <div class="flex flex-col gap-5">
          <a
            v-for="(item, i) in contactItems"
            :key="item.label"
            v-reveal="i * 80"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
            class="paper-card paper-card-hover flex items-center gap-5 p-6"
            :class="i % 2 === 0 ? 'rotate-[-0.4deg]' : 'rotate-[0.4deg]'"
          >
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-ink bg-royal-sky text-royal-deep">
              <UIcon :name="item.icon" class="h-5 w-5" />
            </div>
            <div>
              <p class="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ink-soft">
                {{ item.label }}
              </p>
              <p class="mt-1 font-semibold text-ink">{{ item.value }}</p>
            </div>
          </a>

          <div v-reveal="260" class="paper-card p-6">
            <p class="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ink-soft">Follow us</p>
            <div class="mt-4 flex flex-wrap items-center gap-2.5">
              <a
                v-for="s in socials"
                :key="s.name"
                :href="s.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Follow us on ${s.name}`"
                class="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-ink bg-paper text-ink transition-all hover:-translate-y-0.5 hover:bg-royal hover:text-white"
              >
                <UIcon :name="s.icon" class="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div v-reveal="150" class="paper-card min-h-[340px] overflow-hidden">
          <iframe
            v-if="siteConfig.location.mapsEmbedUrl"
            :src="siteConfig.location.mapsEmbedUrl"
            :title="`Map — ${siteConfig.location.name}`"
            class="h-full w-full border-0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          />
          <a
            v-else
            :href="siteConfig.location.mapsLink"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative flex h-full min-h-[340px] flex-col items-center justify-center gap-4 p-8 text-center"
          >
            <!-- sketch map grid -->
            <div
              aria-hidden="true"
              class="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--color-royal-sky)_1.5px,transparent_1.5px),linear-gradient(90deg,var(--color-royal-sky)_1.5px,transparent_1.5px)] [background-size:44px_44px]"
            />
            <div class="relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-ink bg-royal text-white shadow-[4px_4px_0_0_var(--color-ink)] transition-transform duration-300 group-hover:scale-110">
              <UIcon name="i-lucide-map-pin" class="h-8 w-8" />
            </div>
            <div class="relative">
              <p class="font-display text-lg font-black text-ink">
                {{ siteConfig.location.name }} · {{ siteConfig.location.building }}
              </p>
              <p class="mt-1 text-sm text-ink-soft">{{ siteConfig.location.address }}</p>
            </div>
            <span class="sticker relative">
              Open in Google Maps
              <UIcon name="i-lucide-arrow-up-right" class="h-4 w-4 text-royal" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
