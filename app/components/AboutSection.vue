<script setup lang="ts">
const pillars = [
  {
    icon: "i-lucide-graduation-cap",
    title: "Pro Coaching",
    text: "Coaching from experienced competitive players who have won at the highest regional level.",
  },
  {
    icon: "i-lucide-crosshair",
    title: "Guided Practice",
    text: "Structured drills, scrimmages and VOD reviews designed to turn practice into progress.",
  },
  {
    icon: "i-lucide-bar-chart-3",
    title: "Skill Evaluations",
    text: "Individual evaluations throughout the camp so every player can see measurable improvement.",
  },
  {
    icon: "i-lucide-trophy",
    title: "Real Competition",
    text: "A mini tournament during the camp and a final championship at the end with prizes for winners.",
  },
]
</script>

<template>
  <section id="about" class="relative scroll-mt-24 py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="grid items-start gap-12 lg:grid-cols-2">
        <div v-reveal>
          <p class="kicker">About the Program · عن البرنامج</p>
          <h2 class="mt-4 font-display text-3xl font-black uppercase leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            A professional esports
            <span class="marker-royal">development</span> program
          </h2>
          <div class="mt-6 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>
              The UDST Esports Summer Camp is a professional esports development
              program designed for players who want to improve their competitive
              skills in a structured, fun, and supervised environment.
            </p>
            <p>
              Participants receive coaching from experienced competitive players,
              practice through guided drills, scrimmages, and VOD reviews, and take
              part in skill evaluations throughout the camp.
            </p>
            <p>
              Competition is built into the program itself, a
              <strong class="font-semibold text-ink">mini tournament</strong> during the camp and a
              <strong class="font-semibold text-ink">final championship</strong> at the end, both
              designed to measure player improvement and reward winners with prizes.
            </p>
          </div>
        </div>

        <div class="grid gap-5 sm:grid-cols-2">
          <div
            v-for="(pillar, i) in pillars"
            :key="pillar.title"
            v-reveal="i * 80"
            :class="i % 2 === 0 ? 'sm:rotate-[-0.6deg]' : 'sm:rotate-[0.6deg]'"
          >
            <div class="paper-card paper-card-hover h-full p-6">
              <div class="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-ink bg-royal-sky text-royal-deep">
                <UIcon :name="pillar.icon" class="h-5 w-5" />
              </div>
              <h3 class="mt-4 font-display text-lg font-black text-ink">{{ pillar.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-ink-soft">{{ pillar.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
