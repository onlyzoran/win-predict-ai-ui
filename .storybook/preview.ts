import type { Preview } from '@storybook/vue3'
import { computed, onMounted, watch } from 'vue'
import './preview.css'

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
      description: 'Color theme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (story, context) => ({
      components: { story },
      setup() {
        const theme = computed(() => context.globals.theme as string)

        function applyTheme(value: string) {
          document.documentElement.classList.toggle('dark', value === 'dark')
        }

        onMounted(() => applyTheme(theme.value))
        watch(theme, applyTheme)

        return { theme }
      },
      template: `
        <div class="min-h-screen bg-background text-foreground p-6">
          <p class="mb-4 rounded-md bg-amber-500/15 px-3 py-2 text-sm font-medium text-amber-800 dark:text-amber-200">
            PR preview test — close this PR after checking GitHub Pages.
          </p>
          <story />
        </div>
      `,
    }),
  ],
}

export default preview
