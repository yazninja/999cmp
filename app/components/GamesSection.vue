<script setup lang="ts">
import { siteConfig } from "#shared/site"

const accents = {
  red: {
    bg: "bg-valorant",
    text: "text-valorant",
    border: "!border-valorant !shadow-[5px_5px_0_0_var(--color-valorant)]",
    marker: "marker-red",
  },
  green: {
    bg: "bg-fcgreen",
    text: "text-fcgreen",
    border: "!border-fcgreen !shadow-[5px_5px_0_0_var(--color-fcgreen)]",
    marker: "marker-green",
  },
} as const
</script>

<template>
  <section id="games" class="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
    <Doodle kind="trophy" :rotate="10" class="absolute -right-6 top-16 w-24 opacity-50 lg:right-10 lg:w-32" />

    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div v-reveal class="text-center">
        <p class="kicker">Competitive Titles · الألعاب</p>
        <h2 class="mt-4 font-display text-3xl font-black uppercase tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Choose your <span class="marker-royal">battleground</span>
        </h2>
        <p class="mx-auto mt-5 max-w-2xl text-ink-soft sm:text-lg">
          Two competitive tracks, each with a dedicated pro coach and a curriculum built for that title.
        </p>
      </div>

      <div class=" mt-14 grid gap-8 lg:grid-cols-2">
        <article v-for="(game, i) in siteConfig.games" :key="game.id" v-reveal="i * 120"
          class="relative paper-card paper-card-hover p-8 sm:p-10"
          :class="[accents[game.accent].border, i % 2 === 0 ? 'lg:rotate-[-0.5deg]' : 'lg:rotate-[0.5deg]']">
          <span
            class="inline-flex items-center gap-2 rounded-full border-2 border-ink px-3.5 py-1.5 font-display text-[11px] font-black uppercase tracking-[0.18em] text-white"
            :class="accents[game.accent].bg">
            {{ game.tag }}
          </span>
          <h3 class="mt-5 font-display text-3xl font-black uppercase tracking-tight text-ink sm:text-4xl">
            {{ game.name }}
          </h3>
          <NuxtImg :src="game.logo" alt=""
            class="absolute right-6 top-0 mt-6 w-1/5 h-auto aspect-square border-ink object-contain sm:mt-8" />
          <p class="mt-4 max-w-md leading-relaxed text-ink-soft">{{ game.description }}</p>
          <hr class="print-divider my-6" />
          <ul class="grid gap-3 sm:grid-cols-2">
            <li v-for="feature in game.features" :key="feature"
              class="flex items-center gap-2.5 text-sm font-medium text-ink">
              <UIcon name="i-lucide-check-circle-2" class="h-4 w-4 shrink-0" :class="accents[game.accent].text" />
              {{ feature }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
