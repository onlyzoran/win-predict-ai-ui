import type { StoryObj } from '@storybook/vue3'

/** Toolbar palette × mode — keep in sync with `.storybook/preview.ts`. */
export const PALETTE_THEMES = [
  ['ZincLight', 'zinc-light'],
  ['ZincDark', 'zinc-dark'],
  ['SlateTealLight', 'slate-teal-light'],
  ['SlateTealDark', 'slate-teal-dark'],
  ['ClaudePlusLight', 'claude-plus-light'],
  ['ClaudePlusDark', 'claude-plus-dark'],
  ['PastelLight', 'pastel-light'],
  ['PastelDark', 'pastel-dark'],
] as const

export type PaletteStoryName = (typeof PALETTE_THEMES)[number][0]
export type PaletteTheme = (typeof PALETTE_THEMES)[number][1]

/** Clone a story for each palette × mode (8 variants). Optional namePrefix for secondary stories. */
export function withAllPalettes<T>(
  base: StoryObj<T>,
  namePrefix = '',
): Record<string, StoryObj<T>> {
  const out: Record<string, StoryObj<T>> = {}
  for (const [suffix, theme] of PALETTE_THEMES) {
    out[`${namePrefix}${suffix}`] = {
      ...base,
      globals: { ...base.globals, theme },
    }
  }
  return out
}
