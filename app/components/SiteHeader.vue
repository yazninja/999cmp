<script setup lang="ts">
import { siteConfig } from "#shared/site"
const { locales, setLocale } = useI18n();
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute();

const links = ref<NavigationMenuItem[]>([
  {
    label: "About",
    icon: "i-lucide-info",
    to: "/#about",

    children: [
      {
        label: "Games",
        description: "See the games we offer.",
        to: "/#games",
      },
      {
        label: "Coaches",
        description: "Meet our pro coaches.",
        to: "/#coaches",
      }, {
        label: "Camp Details",
        description: "Learn about the camp schedule and curriculum.",
        to: "/#details",
      }, {
        label: "Pricing",
        description: "See our pricing options.",
        to: "/#pricing",
      }
    ]
  },
  {
    label: "FAQ",
    icon: "i-lucide-help-circle",
    to: "/#faq",
  },
  {
    label: "Contact",
    icon: "i-lucide-mail",
    to: "/#contact",
  }
]);

const languages = locales.value.map((locale) => ({
  label: locale.name,
  onSelect: () => setLocale(locale.code),
}))

const open = ref(false)
const scrolled = ref(false)

onMounted(() => {
  const onScroll = () => (scrolled.value = window.scrollY > 16)
  onScroll()
  window.addEventListener("scroll", onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener("scroll", onScroll))
})




</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled || open ? 'bg-paper/90 shadow-[0_2px_0_0_var(--color-ink)] backdrop-blur-md' : 'bg-transparent'">
    <nav class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
      <!-- Wordmark -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <span
          class="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-ink bg-royal font-display text-sm font-black text-white shadow-[3px_3px_0_0_var(--color-ink)]">
          W
        </span>
        <span class="font-display leading-none">
          <span class="block text-sm font-black tracking-wide text-ink">UDST WOLVES</span>
          <span class="block text-[11px] font-bold uppercase tracking-[0.28em] text-royal">Esports Camp</span>
        </span>
      </NuxtLink>

      <!-- Desktop nav -->
      <UNavigationMenu :items="links" class="h-10 justify-end" color="neutral" variant="link"
        content-orientation="vertical" />

      <div class="hidden items-center gap-6 lg:flex">
        <NuxtLink to="/register"
          class="sticker bg-royal! text-white! transition-transform hover:-translate-y-0.5 active:translate-y-0">
          {{ siteConfig.registrationOpen ? "Register Now" : "Registration Closed" }}
          <UIcon name="i-lucide-mouse-pointer-click" class="h-4 w-4" />
        </NuxtLink>
        <!-- <UDropdownMenu arrow :items="languages" :ui="{
          content: 'w-48'
        }">
          <UButton icon="i-lucide-languages" color="primary" variant="outline" />
        </UDropdownMenu> -->
      </div>


      <!-- Mobile hamburger -->
      <button
        class="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-ink bg-card shadow-[3px_3px_0_0_var(--color-ink)] lg:hidden"
        aria-label="Toggle menu" :aria-expanded="open" @click="open = !open">
        <span class="h-0.5 w-5 bg-ink transition-transform duration-300"
          :class="open ? 'translate-y-2 rotate-45' : ''" />
        <span class="h-0.5 w-5 bg-ink transition-opacity duration-300" :class="open ? 'opacity-0' : ''" />
        <span class="h-0.5 w-5 bg-ink transition-transform duration-300"
          :class="open ? '-translate-y-2 -rotate-45' : ''" />
      </button>
    </nav>

    <!-- Mobile menu -->
    <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-[480px] opacity-100" leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="max-h-[480px] opacity-100" leave-to-class="max-h-0 opacity-0">
      <div v-if="open" class="overflow-hidden border-t-2 border-dashed border-ink/25 lg:hidden">
        <div class="flex flex-col gap-1 px-5 py-4">
          <NuxtLink v-for="link in links" :key="link.to" :to="link.to"
            class="rounded-lg px-3 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-ink-soft hover:bg-royal-sky/30 hover:text-ink"
            @click="open = false">
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/register" class="sticker mt-2 justify-center !bg-royal !text-white" @click="open = false">
            Register Now
            <UIcon name="i-lucide-mouse-pointer-click" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
