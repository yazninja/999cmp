<script setup lang="ts">
import { siteConfig } from "#shared/site"
</script>

<template>
  <section class="relative overflow-hidden pt-32 pb-16 sm:pt-36">
    <!-- Scattered line-art doodles, like the poster margins -->
    <Doodle kind="mouse" :rotate="-14" class="absolute -left-8 top-40 w-28 opacity-70 sm:left-4 sm:w-36 lg:left-16" />
    <Doodle kind="headset" :rotate="10"
      class="absolute -right-10 top-64 w-32 opacity-70 sm:right-2 sm:w-44 lg:right-14" />
    <Doodle kind="controller" :rotate="-8"
      class="absolute -left-10 bottom-24 w-36 opacity-60 sm:left-0 sm:w-48 lg:left-10" />
    <Doodle kind="keyboard" :rotate="12"
      class="absolute -right-14 bottom-10 w-40 opacity-60 sm:right-0 sm:w-52 lg:right-12" />
    <Doodle kind="star" :rotate="8" :float="false" class="absolute right-[18%] top-32 hidden w-8 opacity-50 lg:block" />
    <Doodle kind="star" :rotate="-12" :float="false"
      class="absolute left-[16%] bottom-40 hidden w-6 opacity-40 lg:block" />

    <div class="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-8">
      <!-- Organizer plate -->
      <div v-reveal class="sticker rotate-[-1.5deg]">
        <UIcon name="i-lucide-shield" class="h-4 w-4 text-royal" />
        UDST Wolves Esports · Summer {{ siteConfig.dates.year }}
      </div>

      <!-- Bilingual headline -->
      <h1 v-reveal="100" class="mt-8">
        <span dir="rtl" lang="ar" class="block font-display text-3xl font-bold text-royal-deep sm:text-4xl">
          {{ siteConfig.nameArabic }}
        </span>
        <span
          class="mt-3 block font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl">
          Esports<br class="sm:hidden" />
          Summer<br />
          <span class="marker-royal">Camp</span>
        </span>
      </h1>

      <!-- Game plates -->
      <div v-reveal="200" class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <NuxtLink to="/#games" class="paper-card paper-card-hover flex items-center gap-3 rotate-[-1.2deg] px-6 py-3.5">
          <span
            class="flex h-9 w-9 items-center justify-center rounded-lg bg-fcgreen font-display text-[10px] font-black text-white">FC</span>
          <span class="text-left font-display leading-tight">
            <span class="block text-sm font-black text-ink">EA SPORTS FC 26</span>
            <span class="block text-[10px] font-bold uppercase tracking-[0.18em] text-fcgreen">1v1 Football</span>
          </span>
        </NuxtLink>
        <NuxtLink to="/#games" class="paper-card paper-card-hover flex items-center gap-3 rotate-[1.2deg] px-6 py-3.5">
          <span
            class="flex h-9 w-9 items-center justify-center rounded-lg bg-valorant font-display text-[10px] font-black text-white">VAL</span>
          <span class="text-left font-display leading-tight">
            <span class="block text-sm font-black text-ink">VALORANT</span>
            <span class="block text-[10px] font-bold uppercase tracking-[0.18em] text-valorant">5v5 Tactical</span>
          </span>
        </NuxtLink>
      </div>

      <!-- Bilingual tagline -->
      <div v-reveal="300" class="mt-10">
        <p dir="rtl" lang="ar" class="font-display text-xl font-bold text-royal sm:text-2xl">
          {{ siteConfig.taglineArabic }}
        </p>
        <p class="mt-1 font-display text-xl font-bold text-royal sm:text-2xl">
          {{ siteConfig.tagline }}
        </p>
        <p class="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          {{ siteConfig.subtitle }}
        </p>
      </div>

      <!-- Register pill (poster style, cursor included) -->
      <div v-reveal="400" class="mt-10">
        <NuxtLink to="/register"
          class="group relative inline-flex flex-col items-center gap-0.5 rounded-full border-2 border-ink bg-royal-sky px-12 py-4 shadow-[5px_5px_0_0_var(--color-ink)] transition-all hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-ink)] active:translate-y-0.5 active:shadow-[3px_3px_0_0_var(--color-ink)]">
          <span dir="rtl" lang="ar" class="font-display text-base font-bold text-royal-deep">سجّل الآن</span>
          <span class="font-display text-lg font-black uppercase tracking-[0.14em] text-ink">
            {{ siteConfig.registrationOpen ? "Register Now" : "Registration Closed" }}
          </span>
          <UIcon name="i-lucide-mouse-pointer-2"
            class="click-nudge absolute -bottom-3 -right-2 h-9 w-9 rotate-[-10deg] text-ink [filter:drop-shadow(2px_2px_0_white)]" />
        </NuxtLink>
      </div>

      <!-- Bilingual info split, like the poster's divider block -->
      <div v-reveal="500" class="mt-14 grid w-full max-w-2xl grid-cols-[1fr_2px_1fr] items-center gap-x-5 sm:gap-x-8">
        <div class="text-right">
          <p class="font-display text-sm font-black uppercase tracking-wide text-ink sm:text-base">
            {{ siteConfig.location.name }}
          </p>
          <p class="text-xs text-ink-soft sm:text-sm">{{ siteConfig.location.building }}</p>
          <p class="mt-2 font-display text-sm font-black text-royal sm:text-base">
            {{ siteConfig.dates.display }}
          </p>
        </div>
        <div class="h-full min-h-24 w-0.5 bg-ink" />
        <div dir="rtl" lang="ar" class="text-right">
          <p class="font-display text-sm font-black text-ink sm:text-base">
            {{ siteConfig.location.nameArabic }}
          </p>
          <p class="text-xs text-ink-soft sm:text-sm">{{ siteConfig.location.buildingArabic }}</p>
          <p class="mt-2 font-display text-sm font-black text-royal sm:text-base">
            {{ siteConfig.dates.displayArabic }}
          </p>
        </div>
      </div>

      <!-- Stats strip -->
      <div v-reveal="600" class="mt-14 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
        <div v-for="(stat, i) in siteConfig.stats" :key="stat.label" class="paper-card px-4 py-5"
          :class="i % 2 === 0 ? 'rotate-[-0.8deg]' : 'rotate-[0.8deg]'">
          <div class="font-display text-4xl font-black text-royal">{{ stat.value }}</div>
          <div class="mt-1 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">
            {{ stat.label }}
          </div>
        </div>
      </div>

      <!-- Collaboration line -->
      <div v-reveal="700" class="mt-12 flex w-full max-w-md items-center gap-4">
        <hr class="print-divider flex-1" />
        <p class="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-ink-soft">
          In collaboration with <span class="text-gold">{{ siteConfig.collaboration }}</span>
        </p>
        <hr class="print-divider flex-1" />
      </div>
    </div>
  </section>
</template>
