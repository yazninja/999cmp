<script setup lang="ts">
import { siteConfig } from "#shared/site"

useSeoMeta({
  title: "Terms & Conditions",
  description: `Terms and conditions for the UDST Esports Summer Camp 2026.`,
})

const sections = [
  {
    title: "1. Registration & eligibility",
    body: `Registration for the UDST Esports Summer Camp 2026 is submitted through this website and is subject to review and confirmation by the camp team. Submitting the form does not guarantee a place; your spot is secured once you receive a confirmation email and complete payment. Participants under 18 require parent/guardian consent.`,
  },
  {
    title: "2. Payment",
    body: `The camp fee is 390 QAR per player · full camp. A secure payment link is sent by email after your registration is confirmed. Places are allocated in order of completed payment.`,
  },
  {
    title: "3. Code of conduct",
    body: "All participants are expected to behave respectfully toward coaches, staff, and fellow players. Toxic behavior, cheating, harassment, or damage to equipment may result in removal from the camp without refund.",
  },
  {
    title: "4. Schedule & changes",
    body: `The camp runs August 2 – 16, 2026 at the E-Sports Arena, UDST · Building 18. The organizers reserve the right to adjust session times, group assignments, coaching staff, or the tournament format where necessary. Registered participants will be notified of any material changes.`,
  },
  {
    title: "5. Media",
    body: "Camp sessions and tournaments may be photographed, recorded, or streamed for UDST Esports promotional purposes. If you do not wish to appear in media coverage, notify the team at registration or by email.",
  },
  {
    title: "6. Liability",
    body: "The camp is a supervised environment and reasonable care is taken at all times. Personal belongings brought to the venue remain the participant's responsibility.",
  },
  {
    title: "7. Contact",
    body: `Questions about these terms can be sent to esports@udst.edu.qa.`,
  },
]
</script>

<template>
  <div class="mx-auto max-w-3xl px-5 pt-32 pb-20 sm:px-8">
    <p class="kicker">Legal</p>
    <h1 class="mt-4 font-display text-4xl font-black uppercase tracking-tight text-ink">
      <span class="marker-royal">Terms &amp; Conditions</span>
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
