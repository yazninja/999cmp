<script setup lang="ts">
useSeoMeta({
  title: "Registration Received",
  robots: "noindex",
})

const nextSteps = [
  {
    icon: "i-lucide-shield-check",
    title: "We review your registration",
    text: "Our team checks every submission to place players into the right groups.",
  },
  {
    icon: "i-lucide-mail-check",
    title: "You receive a confirmation email",
    text: "Once confirmed, you'll get your payment link and further instructions by email.",
  },
  {
    icon: "i-lucide-gamepad-2",
    title: "You show up ready to compete",
    text: "Complete payment, then join us at the E-Gaming Arena on day one.",
  },
]
</script>

<template>
  <div class="relative flex min-h-svh items-center overflow-hidden pt-32 pb-20">
    <Doodle kind="trophy" :rotate="-8" class="absolute -left-6 top-36 w-24 opacity-50 lg:left-12 lg:w-32" />
    <Doodle kind="star" :rotate="12" :float="false" class="absolute right-[12%] top-40 hidden w-8 opacity-50 lg:block" />
    <Doodle kind="headset" :rotate="10" class="absolute -right-10 bottom-16 w-32 opacity-50 lg:right-10 lg:w-40" />

    <div class="relative mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
      <div v-reveal>
        <div class="mx-auto flex h-20 w-20 rotate-[-3deg] items-center justify-center rounded-3xl border-2 border-ink bg-fcgreen shadow-[5px_5px_0_0_var(--color-ink)]">
          <UIcon name="i-lucide-check" class="h-10 w-10 text-white" />
        </div>

        <h1 class="mt-8 font-display text-4xl font-black uppercase tracking-tight text-ink sm:text-5xl">
          Thank You for <span class="marker-green">Registering!</span>
        </h1>

        <p class="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
          Your registration has been successfully received. Our team will review
          your registration and contact you shortly.
        </p>
        <p class="mx-auto mt-3 max-w-xl leading-relaxed text-ink-soft">
          Once your registration has been confirmed, you will receive a confirmation
          email along with the payment link and further instructions. We look forward
          to seeing you at the UDST Esports Summer Camp!
        </p>
      </div>

      <div class="mt-12 grid gap-5 text-left sm:grid-cols-3">
        <div
          v-for="(item, i) in nextSteps"
          :key="item.title"
          v-reveal="150 + i * 100"
          :class="i % 2 === 0 ? 'rotate-[-0.6deg]' : 'rotate-[0.6deg]'"
        >
          <div class="paper-card h-full p-5">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-ink bg-royal-sky text-royal-deep">
              <UIcon :name="item.icon" class="h-5 w-5" />
            </div>
            <p class="mt-3 font-display text-sm font-black text-ink">{{ i + 1 }}. {{ item.title }}</p>
            <p class="mt-1.5 text-xs leading-relaxed text-ink-soft">{{ item.text }}</p>
          </div>
        </div>
      </div>

      <div v-reveal="500" class="mt-12">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2.5 rounded-full border-2 border-ink bg-royal px-10 py-4 font-display text-sm font-black uppercase tracking-[0.14em] text-white shadow-[4px_4px_0_0_var(--color-ink)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--color-ink)] active:translate-y-0.5"
        >
          <UIcon name="i-lucide-arrow-left" class="h-4 w-4" />
          Return Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
