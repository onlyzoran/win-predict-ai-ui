export interface StandingsGlossaryEntry {
  abbr: string
  label: string
}

export type StandingsGlossaryPreset = 'football'

export const FOOTBALL_STANDINGS_GLOSSARY: StandingsGlossaryEntry[] = [
  { abbr: 'GP', label: 'Games played' },
  { abbr: 'W', label: 'Wins' },
  { abbr: 'D', label: 'Draws' },
  { abbr: 'L', label: 'Losses' },
  { abbr: 'GF', label: 'Goals for' },
  { abbr: 'GA', label: 'Goals against' },
  { abbr: 'GD', label: 'Goal difference' },
  { abbr: 'Pts', label: 'Points' },
]

export function resolveStandingsGlossaryEntries(
  preset: StandingsGlossaryPreset,
): StandingsGlossaryEntry[] {
  switch (preset) {
    case 'football':
      return FOOTBALL_STANDINGS_GLOSSARY
  }
}
