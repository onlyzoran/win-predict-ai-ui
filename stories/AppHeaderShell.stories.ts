import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { IconLogin } from '@onlyzoran/win-predict-ai-icons'
import AppHeaderShell from '../src/components/AppHeaderShell.vue'

const locales = ['en', 'ru'] as const
const localeLabels: Record<string, string> = {
  en: 'English',
  ru: 'Русский',
}

const meta = {
  title: 'Win Predict AI / UI / AppHeaderShell',
  component: AppHeaderShell,
  tags: ['autodocs'],
} satisfies Meta<typeof AppHeaderShell>

export default meta
type Story = StoryObj<typeof meta>

export const WithGitHubAndActions: Story = {
  args: {
    locale: 'en',
    locales,
    localeLabels,
    localeAriaLabel: 'Language',
    themeAriaLabelLight: 'Switch to light theme',
    themeAriaLabelDark: 'Switch to dark theme',
    githubUrl: 'https://github.com/onlyzoran/win-predict-ai',
    githubAriaLabel: 'GitHub',
  },
  render: (args) => ({
    components: { AppHeaderShell, IconLogin },
    setup() {
      const locale = ref(args.locale)
      return { args, locale, locales, localeLabels }
    },
    template: `
      <div class="pt-16">
        <AppHeaderShell
          v-model:locale="locale"
          :locales="locales"
          :locale-labels="localeLabels"
          :locale-aria-label="args.localeAriaLabel"
          :theme-aria-label-light="args.themeAriaLabelLight"
          :theme-aria-label-dark="args.themeAriaLabelDark"
          :github-url="args.githubUrl"
          :github-aria-label="args.githubAriaLabel"
        >
          <template #brand>
            <a href="#" class="font-semibold text-foreground hover:opacity-80">Win Predict AI</a>
          </template>
          <template #actions>
            <a
              href="#"
              class="inline-flex items-center gap-1.5 rounded-md p-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:px-2 sm:py-1.5"
            >
              <IconLogin :size="16" aria-hidden="true" />
              <span class="hidden sm:inline">Login</span>
            </a>
          </template>
        </AppHeaderShell>
        <p class="text-sm text-muted-foreground">Page content below the fixed header.</p>
      </div>
    `,
  }),
}

export const BrandOnly: Story = {
  args: {
    locale: 'ru',
    locales,
    localeLabels,
  },
  render: (args) => ({
    components: { AppHeaderShell },
    setup() {
      const locale = ref(args.locale)
      return { args, locale, locales, localeLabels }
    },
    template: `
      <div class="pt-16">
        <AppHeaderShell
          v-model:locale="locale"
          :locales="locales"
          :locale-labels="localeLabels"
        >
          <template #brand>
            <span class="font-semibold text-foreground">Win Predict AI Admin</span>
          </template>
        </AppHeaderShell>
        <p class="text-sm text-muted-foreground">No GitHub link, no actions slot.</p>
      </div>
    `,
  }),
}
