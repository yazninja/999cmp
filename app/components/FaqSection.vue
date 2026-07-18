<script setup lang="ts">
import { siteConfig } from "#shared/site"

const items = siteConfig.faq.map((f) => ({
  label: f.question,
  content: f.answer,
}))
</script>

<template>
  <section id="faq" class="relative scroll-mt-24 py-20 sm:py-28">
    <div class="mx-auto max-w-3xl px-5 sm:px-8">
      <div v-reveal class="text-center">
        <p class="kicker">FAQ · الأسئلة الشائعة</p>
        <h2 class="mt-4 font-display text-3xl font-black uppercase tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Questions? <span class="marker-royal">Answered.</span>
        </h2>
      </div>

      <div v-reveal="120" class="paper-card mt-12 px-6 py-2 sm:px-8">
        <UAccordion
          :items="items"
          :ui="{
            item: 'border-b-2 border-dashed border-ink/20 last:border-b-0',
            trigger: 'py-5 font-display text-base font-black text-ink sm:text-lg hover:text-royal',
            body: 'pb-5 text-sm leading-relaxed text-ink-soft sm:text-base',
            trailingIcon: 'text-royal',
          }"
        />
      </div>
    </div>
  </section>
</template>
