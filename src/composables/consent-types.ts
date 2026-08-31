/** localStorage key for persisted consent (shared with app consumer). */
export const CONSENT_STORAGE_KEY = 'cookie-consent-preferences'

export const CONSENT_VERSION = 1

export type ConsentCategory = 'necessary' | 'preferences' | 'analytics'

export type ConsentCategories = Record<ConsentCategory, boolean>

export interface ConsentState {
  version: number
  decided: boolean
  categories: ConsentCategories
  updatedAt: string | null
}

export const DEFAULT_CATEGORIES: ConsentCategories = {
  necessary: true,
  preferences: false,
  analytics: false,
}

export const ACCEPT_ALL_CATEGORIES: ConsentCategories = {
  necessary: true,
  preferences: true,
  analytics: true,
}

export const REJECT_NON_ESSENTIAL_CATEGORIES: ConsentCategories = {
  necessary: true,
  preferences: false,
  analytics: false,
}

export function createInitialConsentState(): ConsentState {
  return {
    version: CONSENT_VERSION,
    decided: false,
    categories: { ...DEFAULT_CATEGORIES },
    updatedAt: null,
  }
}

export type ConsentPreferencesInput = Partial<Pick<ConsentCategories, 'preferences' | 'analytics'>>
