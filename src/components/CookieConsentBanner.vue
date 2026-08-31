<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { cn } from '../utils/cn'
import {
  resolveConsentMessages,
  type ConsentLocale,
  type ConsentMessages,
} from '../composables/consent-i18n'
import { type ConsentCategory } from '../composables/consent-types'
import { useConsent } from '../composables/useConsent'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from './ui/sheet'

const OPTIONAL_CATEGORIES = ['preferences', 'analytics'] as const satisfies readonly ConsentCategory[]

const props = withDefaults(
  defineProps<{
    locale?: ConsentLocale
    messages?: Partial<ConsentMessages>
    privacyPolicyUrl?: string
    storageKey?: string
    /** Storybook / demo: open customize sheet on mount. */
    initialCustomizeOpen?: boolean
  }>(),
  {
    locale: 'en',
    initialCustomizeOpen: false,
  },
)

const {
  showBanner,
  acceptAll,
  rejectAll,
  savePreferences,
  consent,
} = useConsent({ storageKey: props.storageKey })

const messages = computed(() => resolveConsentMessages(props.locale, props.messages))

const customizeOpen = ref(props.initialCustomizeOpen)

const draftPreferences = ref({
  preferences: consent.value.categories.preferences,
  analytics: consent.value.categories.analytics,
})

watch(customizeOpen, (open) => {
  if (open) {
    draftPreferences.value = {
      preferences: consent.value.categories.preferences,
      analytics: consent.value.categories.analytics,
    }
  }
})

function openCustomize() {
  customizeOpen.value = true
}

function onSavePreferences() {
  savePreferences({ ...draftPreferences.value })
  customizeOpen.value = false
}

function onAcceptAll() {
  acceptAll()
  customizeOpen.value = false
}

function onRejectAll() {
  rejectAll()
  customizeOpen.value = false
}
</script>

<template>
  <div data-slot="cookie-consent">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-y-full opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-full opacity-0"
    >
      <div
        v-if="showBanner"
        role="region"
        aria-live="polite"
        aria-label="Cookie consent"
        class="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-4 shadow-lg backdrop-blur-sm supports-[backdrop-filter]:bg-card/90 sm:p-5"
      >
        <div class="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div class="min-w-0 space-y-1.5">
            <p class="text-sm font-semibold text-foreground">
              {{ messages.bannerTitle }}
            </p>
            <p class="text-sm leading-relaxed text-muted-foreground">
              {{ messages.bannerDescription }}
              <a
                v-if="privacyPolicyUrl"
                :href="privacyPolicyUrl"
                class="ml-1 font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                {{ messages.privacyPolicy }}
              </a>
            </p>
          </div>

          <div class="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">
            <Button variant="outline" size="sm" @click="onRejectAll">
              {{ messages.rejectNonEssential }}
            </Button>
            <Button variant="secondary" size="sm" @click="openCustomize">
              {{ messages.customize }}
            </Button>
            <Button size="sm" @click="onAcceptAll">
              {{ messages.acceptAll }}
            </Button>
          </div>
        </div>
      </div>
    </Transition>

    <Sheet v-model:open="customizeOpen">
      <SheetContent side="bottom" class="max-h-[85vh] gap-0 overflow-y-auto rounded-t-xl sm:max-h-[80vh]">
        <SheetHeader class="border-b border-border pb-4">
          <SheetTitle>{{ messages.customizeTitle }}</SheetTitle>
          <SheetDescription>{{ messages.customizeDescription }}</SheetDescription>
        </SheetHeader>

        <div class="flex flex-col gap-4 px-4 py-4">
          <div
            class="flex items-start justify-between gap-4 rounded-lg border border-border bg-muted/30 px-4 py-3"
          >
            <div class="min-w-0 space-y-1">
              <p class="text-sm font-medium text-foreground">
                {{ messages.categories.necessary.label }}
              </p>
              <p class="text-sm text-muted-foreground">
                {{ messages.categories.necessary.description }}
              </p>
            </div>
            <span
              class="shrink-0 rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
            >
              {{ messages.alwaysOn }}
            </span>
          </div>

          <Separator />

          <div
            v-for="category in OPTIONAL_CATEGORIES"
            :key="category"
            class="flex items-start justify-between gap-4 rounded-lg border border-border px-4 py-3"
          >
            <div class="min-w-0 space-y-1">
              <p class="text-sm font-medium text-foreground">
                {{ messages.categories[category].label }}
              </p>
              <p class="text-sm text-muted-foreground">
                {{ messages.categories[category].description }}
              </p>
            </div>

            <button
              type="button"
              role="switch"
              :aria-checked="draftPreferences[category]"
              :aria-label="messages.categories[category].label"
              class="mt-0.5 shrink-0 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              @click="draftPreferences[category] = !draftPreferences[category]"
            >
              <span
                :class="
                  cn(
                    'relative inline-flex h-5 w-9 shrink-0 rounded-full border border-transparent transition-colors',
                    draftPreferences[category] ? 'bg-primary' : 'bg-input',
                  )
                "
              >
                <span
                  :class="
                    cn(
                      'pointer-events-none absolute top-0.5 block size-4 rounded-full bg-background shadow-sm transition-transform',
                      draftPreferences[category] ? 'translate-x-4' : 'translate-x-0.5',
                    )
                  "
                />
              </span>
            </button>
          </div>
        </div>

        <SheetFooter class="border-t border-border pt-4">
          <Button variant="outline" @click="onRejectAll">
            {{ messages.rejectNonEssential }}
          </Button>
          <Button @click="onSavePreferences">
            {{ messages.savePreferences }}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
</template>
