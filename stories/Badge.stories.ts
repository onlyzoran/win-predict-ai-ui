import type { Meta, StoryObj } from '@storybook/vue3'
import { Badge, type BadgeVariant } from '../src/components/ui/badge'

const meta = {
  title: 'Win Predict AI / UI / Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'] satisfies BadgeVariant[],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'default' },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: '<Badge v-bind="args">17%</Badge>',
  }),
}

export const Light: Story = {
  globals: { theme: 'slate-teal-light' },
  args: { ...Default.args },
  render: Default.render,
}

export const Dark: Story = {
  globals: { theme: 'slate-teal-dark' },
  args: { ...Default.args },
  render: Default.render,
}

const variants: BadgeVariant[] = ['default', 'secondary', 'destructive', 'outline']
const labels = ['Live', 'NL', 'Injury', 'Outline']

function variantMatrixTemplate() {
  return `
    <div class="flex flex-wrap items-center gap-3">
      ${variants
        .map(
          (variant, index) => `
        <Badge variant="${variant}">${labels[index] ?? variant}</Badge>
      `,
        )
        .join('')}
    </div>
  `
}

export const VariantMatrix: Story = {
  render: () => ({
    components: { Badge },
    template: variantMatrixTemplate(),
  }),
}

export const VariantMatrixLight: Story = {
  globals: { theme: 'slate-teal-light' },
  render: VariantMatrix.render,
}

export const VariantMatrixDark: Story = {
  globals: { theme: 'slate-teal-dark' },
  render: VariantMatrix.render,
}

export const InTableContext: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <table class="text-sm">
        <thead>
          <tr class="border-b border-border text-left text-muted-foreground">
            <th class="pb-2 pr-6 font-medium">Team</th>
            <th class="pb-2 font-medium">Win %</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-border/60">
            <td class="py-2.5 pr-6 text-foreground">Los Angeles Dodgers</td>
            <td class="py-2.5"><Badge>17%</Badge></td>
          </tr>
          <tr class="border-b border-border/60">
            <td class="py-2.5 pr-6 text-foreground">New York Yankees</td>
            <td class="py-2.5"><Badge variant="secondary">7%</Badge></td>
          </tr>
        </tbody>
      </table>
    `,
  }),
}
