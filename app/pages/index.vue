<template>
  <div>
    <ClientOnly>
      <HeroSection />
      <AboutSection />
      <GamesSection />
      <DetailsSection />
      <CurriculumSection />

      <CoachesSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
import { siteConfig } from "#shared/site"

useSeoMeta({
  title: "Level Up Your Game This Summer",
  description: siteConfig.description,
})
definePageMeta({
  colorMode: 'light',
})
</script>
