<script setup lang="ts">
import { siteConfig } from "#shared/site"
</script>

<template>
  <section id="curriculum" class="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
    <Doodle kind="star" :rotate="14" :float="false" class="absolute left-[8%] top-20 hidden w-7 opacity-40 lg:block" />

    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div v-reveal class="text-center">
        <p class="kicker">The Pathway · المنهج</p>
        <h2 class="mt-4 font-display text-3xl font-black uppercase tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Fundamentals to the <span class="marker-royal">championship</span>
        </h2>
        <p class="mx-auto mt-5 max-w-2xl text-ink-soft sm:text-lg">
          A progressive six-stage development pathway, applied per track, tactical
          systems for EA SPORTS FC 26, map and agent mastery for Valorant.
        </p>
      </div>

      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(stage, i) in siteConfig.curriculum"
          :key="stage.step"
          v-reveal="(i % 3) * 90"
        >
          <div class="paper-card paper-card-hover relative h-full overflow-hidden p-6">
            <span
              aria-hidden="true"
              class="pointer-events-none absolute -top-4 right-2 font-display text-[5.5rem] font-black leading-none text-royal-sky/50"
            >
              {{ stage.step }}
            </span>
            <span class="relative font-display text-sm font-black tracking-[0.3em] text-royal">
              STAGE {{ stage.step }}
            </span>
            <h3 class="relative mt-3 font-display text-xl font-black text-ink">{{ stage.title }}</h3>
            <p class="relative mt-2 text-sm leading-relaxed text-ink-soft">{{ stage.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
