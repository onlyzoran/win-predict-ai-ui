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

function footballStandings(
  rank: number,
  played: number,
  wins: number,
  draws: number,
  losses: number,
  goalsFor: number,
  goalsAgainst: number,
) {
  return {
    rank,
    played,
    wins,
    draws,
    losses,
    goalsFor,
    goalsAgainst,
    goalDifference: goalsFor - goalsAgainst,
    points: wins * 3 + draws,
  }
}

/** Russian Premier League — mock standings with GF/GA/GD/Pts. */
export const rplStandingsTeams: TeamProbability[] = [
  {
    id: 'zen',
    name: 'Zenit',
    winProbability: 0.28,
    standings: footballStandings(1, 22, 14, 5, 3, 42, 18),
  },
  {
    id: 'csk',
    name: 'CSKA Moscow',
    winProbability: 0.18,
    standings: footballStandings(2, 22, 13, 4, 5, 38, 24),
  },
  {
    id: 'kras',
    name: 'Krasnodar',
    winProbability: 0.14,
    standings: footballStandings(3, 22, 12, 6, 4, 40, 26),
  },
  {
    id: 'lok',
    name: 'Lokomotiv Moscow',
    winProbability: 0.11,
    standings: footballStandings(4, 22, 11, 5, 6, 35, 28),
  },
  {
    id: 'dyn',
    name: 'Dynamo Moscow',
    winProbability: 0.09,
    standings: footballStandings(5, 22, 10, 7, 5, 33, 27),
  },
  {
    id: 'spart',
    name: 'Spartak Moscow',
    winProbability: 0.07,
    standings: footballStandings(6, 22, 9, 6, 7, 31, 30),
  },
  {
    id: 'rub',
    name: 'Rubin Kazan',
    winProbability: 0.05,
    standings: footballStandings(7, 22, 8, 8, 6, 28, 29),
  },
  {
    id: 'akh',
    name: 'Akron Togliatti',
    winProbability: 0.03,
    standings: footballStandings(8, 22, 7, 7, 8, 26, 32),
  },
]

/** English Premier League — mock standings with GF/GA/GD/Pts. */
export const eplStandingsTeams: TeamProbability[] = [
  {
    id: 'liv',
    name: 'Liverpool',
    winProbability: 0.32,
    standings: footballStandings(1, 24, 17, 5, 2, 54, 22),
  },
  {
    id: 'ars',
    name: 'Arsenal',
    winProbability: 0.24,
    standings: footballStandings(2, 24, 15, 7, 2, 48, 24),
  },
  {
    id: 'che',
    name: 'Chelsea',
    winProbability: 0.12,
    standings: footballStandings(3, 24, 13, 6, 5, 44, 30),
  },
  {
    id: 'mci',
    name: 'Manchester City',
    winProbability: 0.11,
    standings: footballStandings(4, 24, 12, 7, 5, 41, 28),
  },
  {
    id: 'avl',
    name: 'Aston Villa',
    winProbability: 0.08,
    standings: footballStandings(5, 24, 11, 6, 7, 36, 32),
  },
  {
    id: 'tot',
    name: 'Tottenham',
    winProbability: 0.06,
    standings: footballStandings(6, 24, 10, 8, 6, 38, 34),
  },
  {
    id: 'mun',
    name: 'Manchester United',
    winProbability: 0.04,
    standings: footballStandings(7, 24, 9, 7, 8, 32, 35),
  },
  {
    id: 'new',
    name: 'Newcastle',
    winProbability: 0.03,
    standings: footballStandings(8, 24, 8, 9, 7, 30, 33),
  },
]
