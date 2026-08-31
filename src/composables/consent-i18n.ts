export type ConsentLocale = 'en' | 'ru'

export interface ConsentCategoryMessages {
  label: string
  description: string
}

export interface ConsentMessages {
  bannerTitle: string
  bannerDescription: string
  acceptAll: string
  rejectNonEssential: string
  customize: string
  customizeTitle: string
  customizeDescription: string
  savePreferences: string
  privacyPolicy: string
  alwaysOn: string
  categories: Record<'necessary' | 'preferences' | 'analytics', ConsentCategoryMessages>
}

export const CONSENT_MESSAGES: Record<ConsentLocale, ConsentMessages> = {
  en: {
    bannerTitle: 'Cookie preferences',
    bannerDescription:
      'We use local storage for essential site operation and optional categories you can control. Analytics is off until you opt in.',
    acceptAll: 'Accept all',
    rejectNonEssential: 'Reject non-essential',
    customize: 'Customize',
    customizeTitle: 'Manage cookie preferences',
    customizeDescription:
      'Choose which optional categories we may use. Necessary storage keeps the app working.',
    savePreferences: 'Save preferences',
    privacyPolicy: 'Privacy policy',
    alwaysOn: 'Always on',
    categories: {
      necessary: {
        label: 'Necessary',
        description: 'Required for core functionality such as language and theme.',
      },
      preferences: {
        label: 'Preferences',
        description: 'Remembers tournament pins, sort order, and similar UI choices.',
      },
      analytics: {
        label: 'Analytics',
        description: 'Helps us understand usage when enabled. Not loaded until you opt in.',
      },
    },
  },
  ru: {
    bannerTitle: 'Настройки cookies',
    bannerDescription:
      'Мы используем localStorage для работы сайта и опциональных категорий, которые вы контролируете. Аналитика выключена, пока вы не разрешите.',
    acceptAll: 'Принять все',
    rejectNonEssential: 'Только необходимые',
    customize: 'Настроить',
    customizeTitle: 'Управление cookies',
    customizeDescription:
      'Выберите опциональные категории. Необходимые данные нужны для работы приложения.',
    savePreferences: 'Сохранить',
    privacyPolicy: 'Политика конфиденциальности',
    alwaysOn: 'Всегда включено',
    categories: {
      necessary: {
        label: 'Необходимые',
        description: 'Язык, тема и другие базовые функции.',
      },
      preferences: {
        label: 'Предпочтения',
        description: 'Закреплённые турниры, сортировка и похожие настройки интерфейса.',
      },
      analytics: {
        label: 'Аналитика',
        description: 'Помогает понимать использование. Подключается только после согласия.',
      },
    },
  },
}

export function resolveConsentMessages(
  locale: ConsentLocale,
  overrides?: Partial<ConsentMessages>,
): ConsentMessages {
  const base = CONSENT_MESSAGES[locale] ?? CONSENT_MESSAGES.en
  if (!overrides) return base

  return {
    ...base,
    ...overrides,
    categories: {
      ...base.categories,
      ...overrides.categories,
      necessary: { ...base.categories.necessary, ...overrides.categories?.necessary },
      preferences: { ...base.categories.preferences, ...overrides.categories?.preferences },
      analytics: { ...base.categories.analytics, ...overrides.categories?.analytics },
    },
  }
}
