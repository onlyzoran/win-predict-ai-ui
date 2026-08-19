/** Story-only types — decoupled from win-predict-ai app. */

export interface TeamStandings {
  /** Conference / league group — MLB, NFL. */
  group?: string
  playoffSeed?: number
  played?: number
  wins: number
  losses: number
  /** Win percentage — MLB, NFL. */
  winPercent?: number
  /** League table rank — football. */
  rank?: number
  /** Draws — football. */
  draws?: number
  /** League points — football. */
  points?: number
  goalsFor?: number
  goalsAgainst?: number
  goalDifference?: number
}

export interface TeamProbability {
  id: string
  name: string
  winProbability: number
  standings?: TeamStandings
}

export interface BracketTeam {
  id: string
  name: string
  seed: number
  winProbability: number
}

export interface BracketMatchup {
  id: string
  higher: BracketTeam | null
  lower: BracketTeam | null
  winner: BracketTeam | null
}

export interface LeagueBracket {
  league: 'al' | 'nl'
  group: string
  wildCard: [BracketMatchup, BracketMatchup]
  divisionSeries: [BracketMatchup, BracketMatchup]
  championshipSeries: BracketMatchup
}

export interface MlbPlayoffBracket {
  al: LeagueBracket
  nl: LeagueBracket
  worldSeries: BracketMatchup
  winner: BracketTeam | null
}

export interface RankSeriesPoint {
  date: string
  x: number
  ranks: Record<string, number>
}

export interface RankSeriesTeam {
  name: string
  color: string
}

export interface RankSeries {
  teams: RankSeriesTeam[]
  points: RankSeriesPoint[]
}

export type SortMode = 'popular' | 'name' | 'endingSoon'
