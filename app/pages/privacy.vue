<script setup lang="ts">
import { siteConfig } from "#shared/site"

useSeoMeta({
  title: "Privacy Policy",
  description: `Privacy policy for the UDST Esports Summer Camp 2026.`,
})

const sections = [
  {
    title: "1. Information we collect",
    body: `When you register for the UDST Esports Summer Camp 2026, we collect the information you provide in the registration form: full name, email address, phone number, date of birth, parent/guardian name (for participants under 18), emergency contact number, and your selected game.`,
  },
  {
    title: "2. How we use your information",
    body: "Your information is used solely to process and manage your camp registration: reviewing your submission, organizing player groups, contacting you with confirmation and payment details, and reaching your emergency contact if necessary during the camp.",
  },
  {
    title: "3. Data storage & security",
    body: "Registration data is stored securely and access is restricted to authorized camp staff. We do not sell, rent, or share your personal information with third parties for marketing purposes.",
  },
  {
    title: "4. Minors",
    body: "Participants under 18 must provide a parent/guardian name during registration. Parents or guardians may contact us at any time to review, update, or request deletion of their child's information.",
  },
  {
    title: "5. Your rights",
    body: `You may request access to, correction of, or deletion of your personal data at any time by contacting us at esports@udst.edu.qa.`,
  },
  {
    title: "6. Contact",
    body: `For any privacy-related questions, contact us at esports@udst.edu.qa or +974 4495 2222.`,
  },
]
</script>

<template>
  <div class="mx-auto max-w-3xl px-5 pt-32 pb-20 sm:px-8">
    <p class="kicker">Legal</p>
    <h1 class="mt-4 font-display text-4xl font-black uppercase tracking-tight text-ink">
      <span class="marker-royal">Privacy Policy</span>
    </h1>
    <p class="mt-2 text-sm text-ink-soft">Last updated: July 2026</p>

    <div class="mt-10 space-y-8">
      <section v-for="section in sections" :key="section.title">
        <h2 class="font-display text-xl font-black text-ink">{{ section.title }}</h2>
        <p class="mt-3 leading-relaxed text-ink-soft">{{ section.body }}</p>
      </section>
    </div>
  </div>
</template>
