import type { Meta, StoryObj } from '@storybook/vue3'
import { IconSearch } from '@onlyzoran/win-predict-ai-icons'
import { Button, type ButtonSize, type ButtonVariant } from '../src/components/ui/button'
import { withAllPalettes } from './storyHelpers'

const meta = {
  title: 'Win Predict AI / UI / Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] satisfies ButtonVariant[],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'] satisfies ButtonSize[],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Continue</Button>',
  }),
}

export const {
  ZincLight,
  ZincDark,
  SlateTealLight,
  SlateTealDark,
  ClaudePlusLight,
  ClaudePlusDark,
} = withAllPalettes(Default)

const variants: ButtonVariant[] = ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
const sizes: ButtonSize[] = ['default', 'xs', 'sm', 'lg']

function variantSizeMatrixTemplate() {
  const header = sizes.map((size) => `<th class="pb-2 pr-4 text-left text-xs font-medium text-muted-foreground">${size}</th>`).join('')
  const rows = variants
    .map((variant) => {
      const cells = sizes
        .map(
          (size) => `
        <td class="py-2 pr-4 align-top">
          <Button variant="${variant}" size="${size}">${variant}</Button>
        </td>
      `,
        )
        .join('')
      return `
      <tr class="border-t border-border">
        <th class="py-2 pr-4 text-left text-xs font-medium text-muted-foreground">${variant}</th>
        ${cells}
      </tr>
    `
    })
    .join('')

  return `
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr>
            <th class="pb-2 pr-4 text-left text-xs font-medium text-muted-foreground">variant \\ size</th>
            ${header}
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `
}

export const VariantSizeMatrix: Story = {
  render: () => ({
    components: { Button },
    template: variantSizeMatrixTemplate(),
  }),
}

export const {
  VariantSizeMatrixZincLight,
  VariantSizeMatrixZincDark,
  VariantSizeMatrixSlateTealLight,
  VariantSizeMatrixSlateTealDark,
  VariantSizeMatrixClaudePlusLight,
  VariantSizeMatrixClaudePlusDark,
} = withAllPalettes(VariantSizeMatrix, 'VariantSizeMatrix')

export const IconSizes: Story = {
  render: () => ({
    components: { Button, IconSearch },
    template: `
      <div class="flex flex-wrap items-center gap-3">
        <Button size="icon-xs" variant="outline" aria-label="Search xs"><IconSearch aria-hidden="true" /></Button>
        <Button size="icon-sm" variant="outline" aria-label="Search sm"><IconSearch aria-hidden="true" /></Button>
        <Button size="icon" variant="outline" aria-label="Search default"><IconSearch aria-hidden="true" /></Button>
        <Button size="icon-lg" variant="outline" aria-label="Search lg"><IconSearch aria-hidden="true" /></Button>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-2">
        <Button disabled>Default</Button>
        <Button variant="outline" disabled>Outline</Button>
        <Button variant="secondary" disabled>Secondary</Button>
      </div>
    `,
  }),
}
