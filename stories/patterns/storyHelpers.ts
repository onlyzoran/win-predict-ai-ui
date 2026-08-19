import type { StoryObj } from '@storybook/vue3'

/** Default + Light/Dark via Storybook palette toolbar (slate-teal). */
export function withLightDark<T>(base: StoryObj<T>): Record<string, StoryObj<T>> {
  return {
    Default: base,
    Light: { ...base, globals: { theme: 'slate-teal-light' } },
    Dark: { ...base, globals: { theme: 'slate-teal-dark' } },
  }
}
