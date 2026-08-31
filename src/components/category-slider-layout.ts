/** Category row for {@link CategorySliderLayout}. */
export interface CategorySliderCategory<TItem = unknown> {
  id: string
  title: string
  items: TItem[]
}

/** Layout variant: category sliders never render a filters region. */
export const CATEGORY_SLIDER_LAYOUT_SHOWS_FILTERS = false as const
