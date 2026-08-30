/**
 * Multi-word MLB nicknames that must stay intact when shortening a full team name.
 * Most sites (ESPN, MLB.com, FanGraphs) use the last word as nickname, except when
 * the nickname spans two words (Red Sox, White Sox, Blue Jays).
 */
export const MULTI_WORD_NICKNAMES = ['Red Sox', 'White Sox', 'Blue Jays'] as const

/**
 * Shortens a full team name to its common nickname for narrow layouts.
 *
 * Rules:
 * - Trim whitespace; single-word names pass through unchanged.
 * - Default: last word ("New York Yankees" → "Yankees").
 * - Exceptions: names ending with a multi-word nickname keep both words.
 *
 * @example
 * shortTeamName('Boston Red Sox') // 'Red Sox'
 * shortTeamName('Athletics') // 'Athletics'
 */
export function shortTeamName(name: string): string {
  const trimmed = name.trim()
  for (const nick of MULTI_WORD_NICKNAMES) {
    if (trimmed.endsWith(nick)) {
      return nick
    }
  }

  const parts = trimmed.split(/\s+/)
  return parts[parts.length - 1] ?? trimmed
}

export interface TeamNameLabels {
  /** Full canonical name — use for `title`, desktop (`md+`), and tooltips. */
  full: string
  /** Short nickname — use below the `md` breakpoint. */
  short: string
}

/**
 * Returns both full and short labels for responsive team name rendering.
 * Pair with Tailwind: `<span class="md:hidden">{{ short }}</span>` /
 * `<span class="hidden md:inline">{{ full }}</span>`.
 */
export function teamNameLabels(name: string): TeamNameLabels {
  const full = name.trim()
  return { full, short: shortTeamName(full) }
}
