<script setup lang="ts">
import { siteConfig } from "#shared/site"

const accents = {
  red: { badge: "bg-valorant", text: "text-valorant", frame: "bg-valorant/15" },
  green: { badge: "bg-fcgreen", text: "text-fcgreen", frame: "bg-fcgreen/15" },
} as const
</script>

<template>
  <section id="coaches" class="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
    <Doodle kind="headset" :rotate="-8" class="absolute -left-8 bottom-16 w-28 opacity-50 lg:left-6 lg:w-36" />

    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div v-reveal class="text-center">
        <p class="kicker">Your Coaches · المدربون</p>
        <h2 class="mt-4 font-display text-3xl font-black uppercase tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Learn from <span class="marker-royal">proven champions</span>
        </h2>
        <p class="mx-auto mt-5 max-w-2xl text-ink-soft sm:text-lg">
          Decorated competitors with championship records across Qatar, the Middle
          East, and international qualifiers.
        </p>
      </div>

      <div class="mt-14 grid gap-8 lg:grid-cols-2">
        <article v-for="(coach, i) in siteConfig.coaches" :key="coach.name" v-reveal="i * 120"
          class="paper-card paper-card-hover p-8 sm:p-10"
          :class="i % 2 === 0 ? 'lg:rotate-[-0.4deg]' : 'lg:rotate-[0.4deg]'">
          <div class="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div
              class="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-ink"
              :class="accents[coach.accent].frame">
              <NuxtImg v-if="coach.photo" :src="coach.photo" :alt="`${coach.name} — ${coach.role}`"
                class="h-full w-full object-cover" loading="lazy" />
              <span v-else class="font-display text-3xl font-black text-ink">{{ coach.initials }}</span>
            </div>
            <div>
              <span
                class="inline-flex items-center rounded-full border-2 border-ink px-3.5 py-1.5 font-display text-[11px] font-black uppercase tracking-[0.18em] text-white"
                :class="accents[coach.accent].badge">
                {{ coach.role }}
              </span>
              <h3 class="mt-3 font-display text-2xl font-black text-ink sm:text-3xl">{{ coach.name }}</h3>
            </div>
          </div>

          <p class="mt-6 leading-relaxed text-ink-soft">{{ coach.bio }}</p>
          <hr class="print-divider my-6" />
          <ul class="space-y-3">
            <li v-for="achievement in coach.achievements" :key="achievement"
              class="flex items-start gap-3 text-sm font-medium text-ink">
              <UIcon name="i-lucide-trophy" class="mt-0.5 h-4 w-4 shrink-0" :class="accents[coach.accent].text" />
              {{ achievement }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
