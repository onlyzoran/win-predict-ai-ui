/**
 * Official MLB 3-letter team codes (MLB.com / Stats API roster, 2024+).
 * Used for mobile standings, charts, and tournament cards.
 */
export const MLB_TEAM_ABBREVIATIONS: Readonly<Record<string, string>> = {
  'Arizona Diamondbacks': 'ARI',
  'Atlanta Braves': 'ATL',
  'Athletics': 'OAK',
  'Baltimore Orioles': 'BAL',
  'Boston Red Sox': 'BOS',
  'Chicago Cubs': 'CHC',
  'Chicago White Sox': 'CWS',
  'Cincinnati Reds': 'CIN',
  'Cleveland Guardians': 'CLE',
  'Cleveland Indians': 'CLE',
  'Colorado Rockies': 'COL',
  'Detroit Tigers': 'DET',
  'Houston Astros': 'HOU',
  'Kansas City Royals': 'KC',
  'Los Angeles Angels': 'LAA',
  'Los Angeles Dodgers': 'LAD',
  'Miami Marlins': 'MIA',
  'Milwaukee Brewers': 'MIL',
  'Minnesota Twins': 'MIN',
  'New York Mets': 'NYM',
  'New York Yankees': 'NYY',
  'Oakland Athletics': 'OAK',
  'Philadelphia Phillies': 'PHI',
  'Pittsburgh Pirates': 'PIT',
  'San Diego Padres': 'SD',
  'San Francisco Giants': 'SF',
  'Seattle Mariners': 'SEA',
  'St. Louis Cardinals': 'STL',
  'Tampa Bay Rays': 'TB',
  'Texas Rangers': 'TEX',
  'Toronto Blue Jays': 'TOR',
  'Washington Nationals': 'WSH',
}

const OTHERS_AGGREGATE = /^Others\s*\(\d+\)$/i

function fallbackAbbreviation(name: string): string {
  const parts = name.split(/\s+/).filter(Boolean)
  if (parts.length === 1) {
    const word = parts[0]!
    return word.length <= 3 ? word.toUpperCase() : word.slice(0, 3).toUpperCase()
  }

  const initials = parts.map((part) => part[0] ?? '').join('').toUpperCase()
  return initials.slice(0, 3) || name.slice(0, 3).toUpperCase()
}

/**
 * Returns the official league abbreviation for narrow layouts (mobile).
 *
 * Rules:
 * - Trim whitespace; empty input → empty string.
 * - Look up full team name in {@link MLB_TEAM_ABBREVIATIONS}.
 * - Aggregates like `Others (3)` pass through unchanged.
 * - Unknown names fall back to up to three initials / prefix letters.
 *
 * @example
 * teamAbbreviation('Cincinnati Reds') // 'CIN'
 * teamAbbreviation('Boston Red Sox') // 'BOS'
 * teamAbbreviation('Others (3)') // 'Others (3)'
 */
export function teamAbbreviation(name: string): string {
  const trimmed = name.trim()
  if (!trimmed) {
    return ''
  }
  if (OTHERS_AGGREGATE.test(trimmed)) {
    return trimmed
  }

  const code = MLB_TEAM_ABBREVIATIONS[trimmed]
  if (code) {
    return code
  }

  return fallbackAbbreviation(trimmed)
}

/** Alias for {@link teamAbbreviation} — kept for existing imports. */
export const shortTeamName = teamAbbreviation

export interface TeamNameLabels {
  /** Full canonical name — use for `title`, desktop (`md+`), and tooltips. */
  full: string
  /** League abbreviation — use below the `md` breakpoint. */
  short: string
}

/**
 * Returns both full and abbreviated labels for responsive team name rendering.
 * Pair with Tailwind: `<span class="md:hidden">{{ short }}</span>` /
 * `<span class="hidden md:inline">{{ full }}</span>`.
 */
export function teamNameLabels(name: string): TeamNameLabels {
  const full = name.trim()
  return { full, short: teamAbbreviation(full) }
}
