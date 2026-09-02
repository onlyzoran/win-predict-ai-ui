/** Category row for {@link CategorySliderLayout}. */
export interface CategorySliderCategory<TItem = unknown> {
  id: string
  title: string
  items: TItem[]
}

/** Horizontal inset for category headers and scroll tracks (`px-6`, same as AppHeaderShell). */
export const CATEGORY_SLIDER_LAYOUT_CONTENT_INSET = 'px-6' as const

/** Layout variant: category sliders never render a filters region. */
export const CATEGORY_SLIDER_LAYOUT_SHOWS_FILTERS = false as const
