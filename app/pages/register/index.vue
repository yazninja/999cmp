<script setup lang="ts">
import { siteConfig } from "#shared/site"

useSeoMeta({
  title: "Register",
  description: `Register for the ${siteConfig.name} — ${siteConfig.dates.display} at the ${siteConfig.location.name}.`,
})
definePageMeta({
  colorMode: 'light',
})
</script>

<template>
  <div class="relative overflow-hidden pt-32 pb-20">
    <Doodle kind="mouse" :rotate="-12" class="absolute -left-8 top-40 w-24 opacity-50 lg:left-8 lg:w-32" />
    <Doodle kind="controller" :rotate="10" class="absolute -right-10 bottom-24 w-32 opacity-50 lg:right-8 lg:w-40" />

    <div class="relative mx-auto max-w-7xl px-5 sm:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class="kicker">Secure Your Spot · سجّل الآن</p>
        <h1 class="mt-4 font-display text-4xl font-black uppercase tracking-tight text-ink sm:text-5xl">
          Camp <span class="marker-royal">Registration</span>
        </h1>
        <p class="mt-4 font-medium text-ink-soft">
          {{ siteConfig.dates.display }} · {{ siteConfig.location.name }},
          {{ siteConfig.location.building }}
        </p>
        <div class="sticker mt-5 rotate-[-0.8deg] !text-[10px] !font-bold normal-case !tracking-normal">
          <UIcon name="i-lucide-shield-check" class="h-4 w-4 text-royal" />
          Your information is kept private and used only for camp registration.
        </div>
      </div>

      <div class="mt-12">
        <RegistrationForm />
      </div>
    </div>
  </div>
</template>
