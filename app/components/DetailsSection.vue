<script setup lang="ts">
import { siteConfig } from "#shared/site"
</script>

<template>
  <section id="details" class="relative scroll-mt-24 border-y-2 border-ink bg-royal-sky/25 py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div v-reveal class="text-center">
        <p class="kicker">Camp Details · تفاصيل المخيم</p>
        <h2 class="mt-4 font-display text-3xl font-black uppercase tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Everything the camp <span class="marker-royal">includes</span>
        </h2>
      </div>

      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(detail, i) in siteConfig.campDetails"
          :key="detail.title"
          v-reveal="(i % 4) * 70"
          :class="i % 2 === 0 ? 'rotate-[-0.5deg]' : 'rotate-[0.5deg]'"
        >
          <div class="paper-card paper-card-hover h-full p-6">
            <div class="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-ink bg-paper text-royal-deep">
              <UIcon :name="detail.icon" class="h-5 w-5" />
            </div>
            <h3 class="mt-4 font-display text-base font-black text-ink">{{ detail.title }}</h3>
            <ul class="mt-2 space-y-1">
              <li v-for="line in detail.lines" :key="line" class="text-sm leading-relaxed text-ink-soft">
                {{ line }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
