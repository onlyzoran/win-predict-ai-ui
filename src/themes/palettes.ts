/** Имена палитр, совпадающие с атрибутом data-palette в CSS-темах. */
export const PALETTES = ['zinc', 'slate-teal'] as const

export type Palette = (typeof PALETTES)[number]

/** Палитра по умолчанию для Win Predict AI (продуктовая). */
export const DEFAULT_PALETTE: Palette = 'slate-teal'
