<script setup lang="ts">
import { siteConfig } from "#shared/site"
import { registrationSchema, ageFromDOB } from "#shared/validation"

type FormData = {
  fullName: string
  email: string
  phone: string
  dateOfBirth: string
  guardianName: string
  emergencyContact: string
  game: string
  agreeTerms: boolean
  agreePrivacy: boolean
  website: string // honeypot
}

const form = reactive<FormData>({
  fullName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  guardianName: "",
  emergencyContact: "",
  game: "",
  agreeTerms: false,
  agreePrivacy: false,
  website: "",
})

const steps = [
  { id: 1, label: "Player Info" },
  { id: 2, label: "Contacts & Game" },
  { id: 3, label: "Review & Confirm" },
]

const stepFields: Record<number, (keyof FormData)[]> = {
  1: ["fullName", "email", "dateOfBirth"],
  2: ["phone", "guardianName", "emergencyContact", "game"],
  3: ["agreeTerms", "agreePrivacy"],
}

const step = ref(1)
const direction = ref(1)
const submitting = ref(false)
const serverError = ref("")
const errors = reactive<Record<string, string | undefined>>({})
const formStartedAt = Date.now()

const isMinor = computed(() => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(form.dateOfBirth)) return false
  return ageFromDOB(form.dateOfBirth) < 18
})

const gameOptions = siteConfig.games.map((g) => ({
  label: `${g.name}`,
  value: g.id,
  logo: g.logo,
}))

const selectedGame = computed(() => siteConfig.games.find((g) => g.id === form.game))

const maxDob = new Date().toISOString().slice(0, 10)

function clearError(key: keyof FormData) {
  errors[key] = undefined
  serverError.value = ""
}

/** Validate only the fields belonging to the given step. */
function validateStep(target: number): boolean {
  const result = registrationSchema.safeParse({
    ...toRaw(form),
    // Later steps haven't been reached yet; stub their fields so only
    // the current step's fields can fail.
    agreeTerms: target < 3 ? true : form.agreeTerms,
    agreePrivacy: target < 3 ? true : form.agreePrivacy,
    game: target < 2 ? siteConfig.games[0].id : form.game,
    phone: target < 2 ? "00000000" : form.phone,
    emergencyContact: target < 2 ? "00000000" : form.emergencyContact,
    guardianName: target < 2 ? "placeholder" : form.guardianName,
    formStartedAt,
  })

  if (result.success) return true

  const fields = stepFields[target] ?? []
  let found = false
  for (const issue of result.error.issues) {
    const key = issue.path[0]?.toString() ?? ""
    if (fields.includes(key as keyof FormData) && !errors[key]) {
      errors[key] = issue.message
      found = true
    }
  }
  return !found
}

function next() {
  if (!validateStep(step.value)) return
  direction.value = 1
  step.value = Math.min(step.value + 1, 3)
}

function back() {
  direction.value = -1
  step.value = Math.max(step.value - 1, 1)
}

async function submit() {
  if (!validateStep(3)) return
  submitting.value = true
  serverError.value = ""
  await $fetch("/api/v1/db/users/addUser", {
    method: "POST",
    body: {
      email: form.email,
      name: form.fullName,
      dateOfBirth: form.dateOfBirth,
      phone: form.phone,
      guardianName: form.guardianName,
      emergencyContact: form.emergencyContact,
      game: form.game,
      planyoID: "1shbm1sg4y",
      isPaid: false,
    }
  });
  try {
    const res = await $fetch<{ ok: boolean; error?: string; fieldErrors?: Record<string, string> }>(
      "/api/register",
      { method: "POST", body: { ...toRaw(form), formStartedAt } }
    ).catch((err) => {
      // h3 createError responses land here — surface statusMessage
      const message: string =
        err?.data?.statusMessage ?? err?.data?.error ?? err?.statusMessage ?? ""
      const fieldErrors = err?.data?.fieldErrors
      return { ok: false, error: message || "Something went wrong. Please try again.", fieldErrors }
    })

    if (res.ok) {
      await navigateTo("/register/success")
      return
    }

    if (res.fieldErrors) {
      Object.assign(errors, res.fieldErrors)
      const errorKeys = Object.keys(res.fieldErrors)
      for (const s of [1, 2, 3]) {
        if ((stepFields[s] ?? []).some((f) => errorKeys.includes(f))) {
          direction.value = s < step.value ? -1 : 1
          step.value = s
          break
        }
      }
    }
    serverError.value = res.error ?? "Something went wrong. Please try again."
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <!-- Registration closed state -->
  <div v-if="!siteConfig.registrationOpen" class="paper-card mx-auto max-w-lg p-10 text-center">
    <div
      class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink bg-paper text-ink-soft">
      <UIcon name="i-lucide-lock" class="h-7 w-7" />
    </div>
    <h2 class="mt-5 font-display text-2xl font-black text-ink">Registration is currently closed</h2>
    <p class="mt-3 text-ink-soft">
      Follow our social channels or check back soon for the next registration window.
    </p>
    <NuxtLink to="/" class="sticker mt-7">
      <UIcon name="i-lucide-arrow-left" class="h-4 w-4 text-royal" />
      Return Home
    </NuxtLink>
  </div>

  <div v-else class="paper-card mx-auto max-w-2xl p-6 sm:p-10">
    <!-- ── Step indicator ── -->
    <div class="flex items-center justify-between gap-2">
      <div v-for="(s, i) in steps" :key="s.id" class="flex flex-1 items-center gap-2">
        <div class="flex items-center gap-3">
          <span
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink font-display text-sm font-black transition-all duration-300"
            :class="step > s.id
              ? 'bg-royal text-white'
              : step === s.id
                ? 'bg-royal-sky text-ink'
                : 'bg-paper text-ink-soft'
              ">
            <UIcon v-if="step > s.id" name="i-lucide-check" class="h-4 w-4" />
            <template v-else>{{ s.id }}</template>
          </span>
          <span class="hidden font-display text-xs font-black uppercase tracking-wider sm:block"
            :class="step >= s.id ? 'text-ink' : 'text-ink-soft/60'">
            {{ s.label }}
          </span>
        </div>
        <div v-if="i < steps.length - 1" class="h-0.5 flex-1 transition-colors duration-500"
          :class="step > s.id ? 'bg-royal' : 'bg-ink/15'" />
      </div>
    </div>

    <!-- ── Honeypot (hidden from humans, visible to bots) ── -->
    <div class="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
      <label>
        Website
        <input v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off" />
      </label>
    </div>

    <!-- ── Step content ── -->
    <div class="relative mt-9 overflow-hidden">
      <Transition mode="out-in"
        :enter-from-class="direction > 0 ? 'opacity-0 translate-x-10' : 'opacity-0 -translate-x-10'"
        enter-active-class="transition-all duration-300 ease-out" enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 translate-x-0"
        :leave-to-class="direction > 0 ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'">
        <!-- STEP 1 -->
        <div v-if="step === 1" key="s1" class="space-y-5">
          <UFormField label="Full Name" required :error="errors.fullName">
            <UInput v-model="form.fullName" size="xl" class="w-full" placeholder="e.g. Yousef Al-Marri"
              autocomplete="name" :color="errors.fullName ? 'error' : 'primary'"
              @update:model-value="clearError('fullName')" />
          </UFormField>
          <UFormField label="Email Address" required :error="errors.email">
            <UInput v-model="form.email" type="email" size="xl" class="w-full" placeholder="you@example.com"
              autocomplete="email" :color="errors.email ? 'error' : 'primary'"
              @update:model-value="clearError('email')" />
          </UFormField>
          <UFormField label="Date of Birth" required :error="errors.dateOfBirth">
            <UInput v-model="form.dateOfBirth" type="date" size="xl" class="w-full" :max="maxDob"
              :color="errors.dateOfBirth ? 'error' : 'primary'" @update:model-value="clearError('dateOfBirth')" />
          </UFormField>
        </div>

        <!-- STEP 2 -->
        <div v-else-if="step === 2" key="s2" class="space-y-5">
          <UFormField label="Phone Number" required :error="errors.phone">
            <UInput v-model="form.phone" type="tel" size="xl" class="w-full" placeholder="+974 5555 5555"
              autocomplete="tel" :color="errors.phone ? 'error' : 'primary'"
              @update:model-value="clearError('phone')" />
          </UFormField>
          <UFormField :label="`Parent/Guardian Name${isMinor ? '' : ' (optional)'}`" :required="isMinor"
            :error="errors.guardianName"
            :hint="isMinor ? 'Required — the participant is under 18.' : 'Only required for participants under 18.'">
            <UInput v-model="form.guardianName" size="xl" class="w-full" placeholder="Parent or guardian full name"
              :color="errors.guardianName ? 'error' : 'primary'" @update:model-value="clearError('guardianName')" />
          </UFormField>
          <UFormField label="Emergency Contact Number" required :error="errors.emergencyContact">
            <UInput v-model="form.emergencyContact" type="tel" size="xl" class="w-full" placeholder="+974 5555 5555"
              :color="errors.emergencyContact ? 'error' : 'primary'"
              @update:model-value="clearError('emergencyContact')" />
          </UFormField>
          <UFormField label="Game Selection" required :error="errors.game">
            <USelect v-model="form.game" :items="gameOptions" size="xl" class="w-full" placeholder="Select your game…"
              :avatar="{
                src: selectedGame?.logo,
                loading: 'lazy',
              }" :color="errors.game ? 'error' : 'primary'" @update:model-value="clearError('game')" />
          </UFormField>
        </div>

        <!-- STEP 3 -->
        <div v-else key="s3" class="space-y-6">
          <div class="rounded-2xl border-2 border-dashed border-ink/30 bg-paper p-5">
            <p class="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ink-soft">
              Review your details
            </p>
            <dl class="mt-4 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
              <div>
                <dt class="text-xs uppercase tracking-wider text-ink-soft/70">Full Name</dt>
                <dd class="mt-0.5 font-semibold text-ink">{{ form.fullName || "—" }}</dd>
              </div>
              <div>
                <dt class="text-xs uppercase tracking-wider text-ink-soft/70">Email</dt>
                <dd class="mt-0.5 font-semibold text-ink">{{ form.email || "—" }}</dd>
              </div>
              <div>
                <dt class="text-xs uppercase tracking-wider text-ink-soft/70">Phone</dt>
                <dd class="mt-0.5 font-semibold text-ink">{{ form.phone || "—" }}</dd>
              </div>
              <div>
                <dt class="text-xs uppercase tracking-wider text-ink-soft/70">Date of Birth</dt>
                <dd class="mt-0.5 font-semibold text-ink">{{ form.dateOfBirth || "—" }}</dd>
              </div>
              <div v-if="form.guardianName">
                <dt class="text-xs uppercase tracking-wider text-ink-soft/70">Parent/Guardian</dt>
                <dd class="mt-0.5 font-semibold text-ink">{{ form.guardianName }}</dd>
              </div>
              <div>
                <dt class="text-xs uppercase tracking-wider text-ink-soft/70">Emergency Contact</dt>
                <dd class="mt-0.5 font-semibold text-ink">{{ form.emergencyContact || "—" }}</dd>
              </div>
              <div>
                <dt class="text-xs uppercase tracking-wider text-ink-soft/70">Game</dt>
                <dd class="mt-0.5 font-display font-black text-royal">
                  {{ selectedGame?.name ?? "—" }}
                </dd>
              </div>
            </dl>
          </div>

          <div class="space-y-3">
            <label class="flex cursor-pointer items-start gap-3.5 rounded-xl border-2 p-4 transition-colors" :class="errors.agreeTerms
              ? 'border-valorant bg-valorant/5'
              : form.agreeTerms
                ? 'border-royal bg-royal-sky/25'
                : 'border-ink/20 bg-paper hover:border-ink/50'
              ">
              <UCheckbox v-model="form.agreeTerms" @update:model-value="clearError('agreeTerms')" />
              <span class="text-sm leading-relaxed text-ink">
                I agree to the
                <NuxtLink to="/terms" target="_blank" class="font-bold text-royal underline underline-offset-2">
                  Terms &amp; Conditions
                </NuxtLink>
              </span>
            </label>
            <p v-if="errors.agreeTerms" role="alert" class="text-xs font-medium text-valorant">
              {{ errors.agreeTerms }}
            </p>

            <label class="flex cursor-pointer items-start gap-3.5 rounded-xl border-2 p-4 transition-colors" :class="errors.agreePrivacy
              ? 'border-valorant bg-valorant/5'
              : form.agreePrivacy
                ? 'border-royal bg-royal-sky/25'
                : 'border-ink/20 bg-paper hover:border-ink/50'
              ">
              <UCheckbox v-model="form.agreePrivacy" @update:model-value="clearError('agreePrivacy')" />
              <span class="text-sm leading-relaxed text-ink">
                I agree to the
                <NuxtLink to="/privacy" target="_blank" class="font-bold text-royal underline underline-offset-2">
                  Privacy Policy
                </NuxtLink>
              </span>
            </label>
            <p v-if="errors.agreePrivacy" role="alert" class="text-xs font-medium text-valorant">
              {{ errors.agreePrivacy }}
            </p>
          </div>
        </div>
      </Transition>
    </div>

    <!-- ── Server error ── -->
    <p v-if="serverError" role="alert"
      class="mt-5 rounded-xl border-2 border-valorant bg-valorant/10 px-4 py-3 text-sm font-medium text-valorant">
      {{ serverError }}
    </p>

    <!-- ── Navigation ── -->
    <div class="mt-9 flex items-center justify-between gap-4">
      <button v-if="step > 1" :disabled="submitting"
        class="inline-flex items-center gap-2 rounded-xl px-5 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-ink-soft transition-colors hover:text-ink disabled:opacity-40"
        @click="back">
        <UIcon name="i-lucide-arrow-left" class="h-4 w-4" />
        Back
      </button>
      <span v-else />

      <button v-if="step < 3"
        class="inline-flex items-center gap-2.5 rounded-full border-2 border-ink bg-royal px-8 py-3.5 font-display text-sm font-black uppercase tracking-[0.14em] text-white shadow-[4px_4px_0_0_var(--color-ink)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--color-ink)] active:translate-y-0.5 active:shadow-[2px_2px_0_0_var(--color-ink)]"
        @click="next">
        Continue
        <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
      </button>
      <button v-else :disabled="submitting"
        class="inline-flex items-center gap-2.5 rounded-full border-2 border-ink bg-royal px-8 py-3.5 font-display text-sm font-black uppercase tracking-[0.14em] text-white shadow-[4px_4px_0_0_var(--color-ink)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--color-ink)] active:translate-y-0.5 active:shadow-[2px_2px_0_0_var(--color-ink)] disabled:cursor-not-allowed disabled:opacity-60"
        @click="submit">
        <UIcon :name="submitting ? 'i-lucide-loader-2' : 'i-lucide-mouse-pointer-click'" class="h-4 w-4"
          :class="{ 'animate-spin': submitting }" />
        {{ submitting ? "Submitting…" : "Submit Registration" }}
      </button>
    </div>
  </div>
</template>
