import type { Preview } from '@storybook/vue3'
import { computed, onMounted, watch } from 'vue'
import './preview.css'

/** Toolbar values: legacy-light | legacy-dark | win-predict-light | win-predict-dark */
const THEME_VALUES = [
  'legacy-light',
  'legacy-dark',
  'win-predict-light',
  'win-predict-dark',
] as const

type ThemeValue = (typeof THEME_VALUES)[number]

function parseTheme(value: string): { palette: 'legacy' | 'win-predict'; dark: boolean } {
  switch (value as ThemeValue) {
    case 'legacy-light':
      return { palette: 'legacy', dark: false }
    case 'legacy-dark':
      return { palette: 'legacy', dark: true }
    case 'win-predict-dark':
      return { palette: 'win-predict', dark: true }
    case 'win-predict-light':
    default:
      return { palette: 'win-predict', dark: false }
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
          { value: 'legacy-light', title: 'Старый · Light (zinc)', icon: 'sun' },
          { value: 'legacy-dark', title: 'Старый · Dark (zinc)', icon: 'moon' },
          { value: 'win-predict-light', title: 'Новый · Light (teal)', icon: 'sun' },
          { value: 'win-predict-dark', title: 'Новый · Dark (teal)', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'win-predict-light',
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
