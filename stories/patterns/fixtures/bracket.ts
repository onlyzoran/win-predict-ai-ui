import type { BracketMatchup, BracketTeam, MlbPlayoffBracket } from '../types'

function team(id: string, name: string, seed: number, winProbability: number): BracketTeam {
  return { id, name, seed, winProbability }
}

function matchup(
  id: string,
  higher: BracketTeam | null,
  lower: BracketTeam | null,
): BracketMatchup {
  const winner =
    higher && lower
      ? higher.winProbability >= lower.winProbability
        ? higher
        : lower
      : higher ?? lower

  return { id, higher, lower, winner }
}

/** Static MLB playoff bracket mock — visual replica for pattern stories. */
export const mockMlbPlayoffBracket: MlbPlayoffBracket = {
  al: {
    league: 'al',
    group: 'American League',
    wildCard: [
      matchup(
        'al-wc-3-6',
        team('cle', 'Cleveland Guardians', 3, 0.03),
        team('det', 'Detroit Tigers', 6, 0.01),
      ),
      matchup(
        'al-wc-4-5',
        team('hou', 'Houston Astros', 4, 0.04),
        team('sea', 'Seattle Mariners', 5, 0.02),
      ),
    ],
    divisionSeries: [
      matchup(
        'al-ds-1',
        team('bal', 'Baltimore Orioles', 1, 0.04),
        team('hou', 'Houston Astros', 4, 0.04),
      ),
      matchup(
        'al-ds-2',
        team('nyy', 'New York Yankees', 2, 0.07),
        team('cle', 'Cleveland Guardians', 3, 0.03),
      ),
    ],
    championshipSeries: matchup(
      'al-cs',
      team('nyy', 'New York Yankees', 2, 0.07),
      team('bal', 'Baltimore Orioles', 1, 0.04),
    ),
  },
  nl: {
    league: 'nl',
    group: 'National League',
    wildCard: [
      matchup(
        'nl-wc-3-6',
        team('sd', 'San Diego Padres', 3, 0.02),
        team('ari', 'Arizona Diamondbacks', 6, 0.01),
      ),
      matchup(
        'nl-wc-4-5',
        team('phi', 'Philadelphia Phillies', 4, 0.05),
        team('nyk', 'New York Mets', 5, 0.02),
      ),
    ],
    divisionSeries: [
      matchup(
        'nl-ds-1',
        team('lad', 'Los Angeles Dodgers', 1, 0.17),
        team('phi', 'Philadelphia Phillies', 4, 0.05),
      ),
      matchup(
        'nl-ds-2',
        team('mil', 'Milwaukee Brewers', 2, 0.06),
        team('sd', 'San Diego Padres', 3, 0.02),
      ),
    ],
    championshipSeries: matchup(
      'nl-cs',
      team('lad', 'Los Angeles Dodgers', 1, 0.17),
      team('mil', 'Milwaukee Brewers', 2, 0.06),
    ),
  },
  worldSeries: matchup(
    'ws',
    team('lad', 'Los Angeles Dodgers', 1, 0.17),
    team('nyy', 'New York Yankees', 2, 0.07),
  ),
  winner: team('lad', 'Los Angeles Dodgers', 1, 0.17),
}
