import type { TeamProbability } from '../types'

/** Top MLB teams with standings — mock for pattern stories. */
export const mlbWorldSeriesTeams: TeamProbability[] = [
  {
    id: 'lad',
    name: 'Los Angeles Dodgers',
    winProbability: 0.17,
    standings: { group: 'NL West', playoffSeed: 1, played: 162, wins: 98, losses: 64, winPercent: 0.605 },
  },
  {
    id: 'nyy',
    name: 'New York Yankees',
    winProbability: 0.07,
    standings: { group: 'AL East', playoffSeed: 2, played: 162, wins: 94, losses: 68, winPercent: 0.58 },
  },
  {
    id: 'mil',
    name: 'Milwaukee Brewers',
    winProbability: 0.06,
    standings: { group: 'NL Central', playoffSeed: 1, played: 162, wins: 93, losses: 69, winPercent: 0.574 },
  },
  {
    id: 'phi',
    name: 'Philadelphia Phillies',
    winProbability: 0.05,
    standings: { group: 'NL East', playoffSeed: 2, played: 162, wins: 89, losses: 73, winPercent: 0.549 },
  },
  {
    id: 'hou',
    name: 'Houston Astros',
    winProbability: 0.04,
    standings: { group: 'AL West', playoffSeed: 3, played: 162, wins: 87, losses: 75, winPercent: 0.537 },
  },
  {
    id: 'bal',
    name: 'Baltimore Orioles',
    winProbability: 0.04,
    standings: { group: 'AL East', playoffSeed: 1, played: 162, wins: 91, losses: 71, winPercent: 0.562 },
  },
  {
    id: 'atl',
    name: 'Atlanta Braves',
    winProbability: 0.03,
    standings: { group: 'NL East', playoffSeed: 1, played: 162, wins: 88, losses: 74, winPercent: 0.543 },
  },
  {
    id: 'cle',
    name: 'Cleveland Guardians',
    winProbability: 0.03,
    standings: { group: 'AL Central', playoffSeed: 1, played: 162, wins: 92, losses: 70, winPercent: 0.568 },
  },
]

/** Probability-only list (no W/L standings) — e.g. futures without season data. */
export const probabilityOnlyTeams: TeamProbability[] = mlbWorldSeriesTeams.map((team) => ({
  id: team.id,
  name: team.name,
  winProbability: team.winProbability,
}))

export const leagueCardTeams = mlbWorldSeriesTeams.slice(0, 8)
