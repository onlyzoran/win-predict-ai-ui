import type { Preview } from '@storybook/vue3'
import { addons, useGlobals } from 'storybook/preview-api'
import { watch } from 'vue'
import './preview.css'

/** Toolbar values: zinc | slate-teal | claude-plus × light/dark */
const THEME_VALUES = [
  'zinc-light',
  'zinc-dark',
  'slate-teal-light',
  'slate-teal-dark',
  'claude-plus-light',
  'claude-plus-dark',
] as const

type ThemeValue = (typeof THEME_VALUES)[number]

type PaletteName = 'zinc' | 'slate-teal' | 'claude-plus'

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

// Toolbar меняет globals без remount декоратора — слушаем канал Storybook.
addons.getChannel().on('globalsUpdated', ({ globals }: { globals: { theme?: string } }) => {
  if (globals.theme) applyTheme(globals.theme)
})

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
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'slate-teal-light',
  },
  decorators: [
    (story, context) => {
      applyTheme(context.globals.theme as string)

      return {
        components: { story },
        setup() {
          const [globals] = useGlobals()

          watch(
            () => globals.theme as string,
            (theme) => applyTheme(theme),
            { immediate: true },
          )
        },
        template: `
          <div class="min-h-screen bg-background text-foreground p-6">
            <story />
          </div>
        `,
      }
    },
  ],
}

export default preview
