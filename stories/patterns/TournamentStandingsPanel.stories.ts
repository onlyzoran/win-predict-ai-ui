import type { Meta, StoryObj } from '@storybook/vue3'
import { withAllPalettes } from '../storyHelpers'
import TournamentStandingsPanelPattern from './demos/TournamentStandingsPanelPattern.vue'
import { mlbWorldSeriesTeams, probabilityOnlyTeams } from './fixtures/teams'

const meta = {
  title: 'Win Predict AI / Patterns / TournamentStandingsPanel',
  component: TournamentStandingsPanelPattern,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof TournamentStandingsPanelPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { TournamentStandingsPanelPattern },
    setup: () => ({ teams: mlbWorldSeriesTeams }),
    template: '<TournamentStandingsPanelPattern :teams="teams" />',
  }),
}

export const WithChart: Story = {
  render: () => ({
    components: { TournamentStandingsPanelPattern },
    setup: () => ({ teams: mlbWorldSeriesTeams }),
    template: '<TournamentStandingsPanelPattern :teams="teams" show-chart />',
  }),
}

export const Compact: Story = {
  render: () => ({
    components: { TournamentStandingsPanelPattern },
    setup: () => ({ teams: mlbWorldSeriesTeams }),
    template: '<TournamentStandingsPanelPattern :teams="teams" compact />',
  }),
}

export const ProbabilityOnly: Story = {
  render: () => ({
    components: { TournamentStandingsPanelPattern },
    setup: () => ({ teams: probabilityOnlyTeams }),
    template: '<TournamentStandingsPanelPattern :teams="teams" />',
  }),
}


export const {
  ZincLight,
  ZincDark,
  SlateTealLight,
  SlateTealDark,
  ClaudePlusLight,
  ClaudePlusDark,
} = withAllPalettes(WithChart)

