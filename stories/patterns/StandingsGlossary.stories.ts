import type { Meta, StoryObj } from '@storybook/vue3'
import StandingsGlossaryPattern from './demos/StandingsGlossaryPattern.vue'

const meta = {
  title: 'Win Predict AI / Patterns / StandingsGlossary',
  component: StandingsGlossaryPattern,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof StandingsGlossaryPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Football: Story = {
  render: () => ({
    components: { StandingsGlossaryPattern },
    template: '<StandingsGlossaryPattern variant="football" />',
  }),
}

export const Mlb: Story = {
  render: () => ({
    components: { StandingsGlossaryPattern },
    template: '<StandingsGlossaryPattern variant="mlb" />',
  }),
}

export const CustomEntries: Story = {
  render: () => ({
    components: { StandingsGlossaryPattern },
    setup: () => ({
      entries: [
        { abbr: 'GP', label: 'Games played' },
        { abbr: 'Pts', label: 'Points' },
      ],
    }),
    template: '<StandingsGlossaryPattern :entries="entries" />',
  }),
}
