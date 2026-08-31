import type { Meta, StoryObj } from '@storybook/vue3'
import { onMounted } from 'vue'
import CookieConsentBanner from '../src/components/CookieConsentBanner.vue'
import { CONSENT_STORAGE_KEY } from '../src/composables/consent-types'
import { useConsent } from '../src/composables/useConsent'

const STORY_STORAGE_KEY = 'cookie-consent-preferences-story'

const meta = {
  title: 'Win Predict AI / UI / CookieConsentBanner',
  component: CookieConsentBanner,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    locale: { control: 'select', options: ['en', 'ru'] },
    privacyPolicyUrl: { control: 'text' },
    initialCustomizeOpen: { control: 'boolean' },
  },
} satisfies Meta<typeof CookieConsentBanner>

export default meta
type Story = StoryObj<typeof meta>

function clearStoryStorage() {
  localStorage.removeItem(STORY_STORAGE_KEY)
}

export const FirstVisit: Story = {
  args: {
    locale: 'en',
    storageKey: STORY_STORAGE_KEY,
    privacyPolicyUrl: '/privacy',
    initialCustomizeOpen: false,
  },
  render: (args) => ({
    components: { CookieConsentBanner },
    setup() {
      onMounted(clearStoryStorage)
      return { args }
    },
    template: `
      <div class="min-h-[320px] bg-background p-6">
        <p class="text-sm text-muted-foreground">
          First visit — banner appears at the bottom until a choice is saved.
        </p>
        <CookieConsentBanner v-bind="args" />
      </div>
    `,
  }),
}

export const FirstVisitRu: Story = {
  ...FirstVisit,
  args: {
    ...FirstVisit.args,
    locale: 'ru',
  },
}

export const AfterAccept: Story = {
  args: {
    locale: 'en',
    storageKey: STORY_STORAGE_KEY,
  },
  render: (args) => ({
    components: { CookieConsentBanner },
    setup() {
      onMounted(() => {
        clearStoryStorage()
        const { acceptAll } = useConsent({ storageKey: STORY_STORAGE_KEY })
        acceptAll()
      })
      return { args }
    },
    template: `
      <div class="min-h-[320px] bg-background p-6">
        <p class="text-sm text-muted-foreground">
          Consent already saved — banner stays hidden.
        </p>
        <CookieConsentBanner v-bind="args" />
      </div>
    `,
  }),
}

export const CustomizeOpen: Story = {
  args: {
    locale: 'en',
    storageKey: STORY_STORAGE_KEY,
    initialCustomizeOpen: true,
  },
  render: (args) => ({
    components: { CookieConsentBanner },
    setup() {
      onMounted(clearStoryStorage)
      return { args }
    },
    template: `
      <div class="min-h-[480px] bg-background p-6">
        <p class="text-sm text-muted-foreground">
          Customize sheet with category toggles (Necessary always on).
        </p>
        <CookieConsentBanner v-bind="args" />
      </div>
    `,
  }),
}

export const CustomizeOpenRu: Story = {
  ...CustomizeOpen,
  args: {
    ...CustomizeOpen.args,
    locale: 'ru',
  },
}

/** Documents the default production storage key for app integration. */
export const DefaultStorageKey: Story = {
  args: {
    locale: 'en',
    storageKey: CONSENT_STORAGE_KEY,
  },
  render: (args) => ({
    components: { CookieConsentBanner },
    setup() {
      onMounted(() => localStorage.removeItem(CONSENT_STORAGE_KEY))
      return { args }
    },
    template: `
      <div class="min-h-[320px] bg-background p-6">
        <CookieConsentBanner v-bind="args" />
      </div>
    `,
  }),
}
