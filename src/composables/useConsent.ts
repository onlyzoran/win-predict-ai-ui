import { computed } from 'vue'
import { useStorage } from '@vueuse/core'
import {
  ACCEPT_ALL_CATEGORIES,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  createInitialConsentState,
  REJECT_NON_ESSENTIAL_CATEGORIES,
  type ConsentCategory,
  type ConsentPreferencesInput,
  type ConsentState,
} from './consent-types'

export interface UseConsentOptions {
  /** Override storage key (default: `cookie-consent-preferences`). */
  storageKey?: string
}

function normalizeState(raw: ConsentState): ConsentState {
  return {
    version: CONSENT_VERSION,
    decided: Boolean(raw.decided),
    categories: {
      necessary: true,
      preferences: Boolean(raw.categories?.preferences),
      analytics: Boolean(raw.categories?.analytics),
    },
    updatedAt: raw.updatedAt ?? null,
  }
}

function persistDecision(
  state: ConsentState,
  categories: ConsentState['categories'],
): ConsentState {
  return normalizeState({
    ...state,
    decided: true,
    categories: { ...categories, necessary: true },
    updatedAt: new Date().toISOString(),
  })
}

export function useConsent(options: UseConsentOptions = {}) {
  const storageKey = options.storageKey ?? CONSENT_STORAGE_KEY

  const consent = useStorage<ConsentState>(
    storageKey,
    createInitialConsentState(),
    localStorage,
    { mergeDefaults: true },
  )

  const showBanner = computed(() => !consent.value.decided)

  function hasConsent(category: ConsentCategory): boolean {
    if (category === 'necessary') return true
    if (!consent.value.decided) return false
    return consent.value.categories[category] === true
  }

  function acceptAll() {
    consent.value = persistDecision(consent.value, ACCEPT_ALL_CATEGORIES)
  }

  function rejectAll() {
    consent.value = persistDecision(consent.value, REJECT_NON_ESSENTIAL_CATEGORIES)
  }

  function savePreferences(preferences: ConsentPreferencesInput) {
    consent.value = persistDecision(consent.value, {
      necessary: true,
      preferences: preferences.preferences ?? consent.value.categories.preferences,
      analytics: preferences.analytics ?? consent.value.categories.analytics,
    })
  }

  function resetConsent() {
    consent.value = createInitialConsentState()
  }

  return {
    consent,
    showBanner,
    hasConsent,
    acceptAll,
    rejectAll,
    savePreferences,
    resetConsent,
  }
}

export type UseConsentReturn = ReturnType<typeof useConsent>
