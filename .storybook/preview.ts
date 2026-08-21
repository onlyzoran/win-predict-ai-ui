import type { Preview } from '@storybook/vue3'
import { computed, onMounted, watch } from 'vue'
import './preview.css'

/** Toolbar values: zinc | slate-teal | claude-plus | nexora × light/dark */
const THEME_VALUES = [
  'zinc-light',
  'zinc-dark',
  'slate-teal-light',
  'slate-teal-dark',
  'claude-plus-light',
  'claude-plus-dark',
  'nexora-light',
  'nexora-dark',
] as const

type ThemeValue = (typeof THEME_VALUES)[number]

type PaletteName = 'zinc' | 'slate-teal' | 'claude-plus' | 'nexora'

function parseTheme(value: string): { palette: PaletteName; dark: boolean } {
  switch (value as ThemeValue) {
    case 'zinc-light':
      return { palette: 'zinc', dark: false }
    case 'zinc-dark':
      return { palette: 'zinc', dark: true }
    case 'slate-teal-dark':
      return { palette: 'slate-teal', dark: true }
    case 'claude-plus-light':
      return { palette: 'claude-plus', dark: false }
    case 'claude-plus-dark':
      return { palette: 'claude-plus', dark: true }
    case 'nexora-light':
      return { palette: 'nexora', dark: false }
    case 'nexora-dark':
      return { palette: 'nexora', dark: true }
    case 'slate-teal-light':
    default:
      return { palette: 'slate-teal', dark: false }
  }
}

function applyTheme(value: string) {
  const { palette, dark } = parseTheme(value)
  document.documentElement.setAttribute('data-palette', palette)
  document.documentElement.classList.toggle('dark', dark)
}

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Color palette and mode (Storybook-only)',
      toolbar: {
        title: 'Palette',
        icon: 'paintbrush',
        items: [
          { value: 'zinc-light', title: 'Zinc · Light', icon: 'sun' },
          { value: 'zinc-dark', title: 'Zinc · Dark', icon: 'moon' },
          { value: 'slate-teal-light', title: 'Slate + Teal · Light', icon: 'sun' },
          { value: 'slate-teal-dark', title: 'Slate + Teal · Dark', icon: 'moon' },
          { value: 'claude-plus-light', title: 'Claude+ · Light', icon: 'sun' },
          { value: 'claude-plus-dark', title: 'Claude+ · Dark', icon: 'moon' },
          { value: 'nexora-light', title: 'Nexora · Light', icon: 'sun' },
          { value: 'nexora-dark', title: 'Nexora · Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'slate-teal-light',
  },
  decorators: [
    (story, context) => ({
      components: { story },
      setup() {
        const theme = computed(() => context.globals.theme as string)

        onMounted(() => applyTheme(theme.value))
        watch(theme, applyTheme)

        return { theme }
      },
      template: `
        <div class="min-h-screen bg-background text-foreground p-6">
          <story />
        </div>
      `,
    }),
  ],
}

export default preview
