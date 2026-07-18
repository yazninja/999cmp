<script setup lang="ts">
import { siteConfig } from "#shared/site"
</script>

<template>
  <section id="pricing" class="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
    <Doodle kind="mouse" :rotate="12" class="absolute -right-8 top-24 w-24 opacity-50 lg:right-16 lg:w-32" />
    <Doodle kind="controller" :rotate="-10" class="absolute -left-10 bottom-16 w-32 opacity-50 lg:left-10 lg:w-40" />

    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div v-reveal class="text-center">
        <p class="kicker">Pricing · الرسوم</p>
        <h2 class="mt-4 font-display text-3xl font-black uppercase tracking-tight text-ink sm:text-4xl lg:text-5xl">
          One camp. <span class="marker-royal">Everything included.</span>
        </h2>
      </div>

      <div v-reveal="150" class="mx-auto mt-14 max-w-lg">
        <div class="paper-card paper-card-royal relative rotate-[-0.6deg] p-8 sm:p-10">
          <!-- price sticker -->
          <div class="absolute -top-5 right-6 rotate-[4deg]">
            <span class="sticker !bg-gold !text-white">Full Camp Pass</span>
          </div>

          <div class="text-center">
            <div class="mt-2 flex items-baseline justify-center gap-2.5">
              <span class="font-display text-7xl font-black tracking-tight text-royal-deep sm:text-8xl">
                {{ siteConfig.pricing.amount.toLocaleString() }}
              </span>
              <span class="font-display text-2xl font-black text-ink">
                {{ siteConfig.pricing.currency }}
              </span>
            </div>
            <p class="mt-2 font-display text-sm font-bold uppercase tracking-[0.18em] text-ink-soft">
              {{ siteConfig.pricing.period }}
            </p>
          </div>

          <hr class="print-divider my-7" />

          <ul class="space-y-3.5">
            <li
              v-for="item in siteConfig.pricing.includes"
              :key="item"
              class="flex items-center gap-3 font-medium text-ink"
            >
              <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-royal-sky">
                <UIcon name="i-lucide-check" class="h-3.5 w-3.5 text-royal-deep" />
              </span>
              {{ item }}
            </li>
          </ul>

          <NuxtLink
            to="/register"
            class="mt-9 flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-ink bg-royal py-4 font-display text-base font-black uppercase tracking-[0.14em] text-white shadow-[4px_4px_0_0_var(--color-ink)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--color-ink)] active:translate-y-0.5 active:shadow-[2px_2px_0_0_var(--color-ink)]"
          >
            {{ siteConfig.registrationOpen ? "Register Now" : "Registration Closed" }}
            <UIcon name="i-lucide-mouse-pointer-click" class="h-5 w-5" />
          </NuxtLink>
          <p class="mt-4 text-center text-xs text-ink-soft">
            Payment link is sent by email after your registration is confirmed.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
