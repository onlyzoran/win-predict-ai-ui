export function formatPercent(value: number): string {
  const pct = value <= 1 ? value * 100 : value
  if (pct >= 10) {
    return `${Math.round(pct)}%`
  }
  if (pct >= 1) {
    return `${pct.toFixed(1)}%`
  }
  return `${pct.toFixed(2)}%`
}

export function formatRecord(wins: number, losses: number): string {
  return `${wins}–${losses}`
}

export function formatWinPercent(value: number): string {
  return value.toFixed(3).replace(/^0/, '')
}

export function abbreviateGroup(group: string): string {
  const parts = group.split(/\s+/)
  if (parts.length >= 2) {
    return parts.map((p) => p[0]).join('')
  }
  return group.slice(0, 3).toUpperCase()
}

export function shortTeamName(name: string): string {
  const multi = ['Red Sox', 'White Sox', 'Blue Jays'] as const
  for (const nick of multi) {
    if (name.endsWith(nick)) {
      return nick
    }
  }
  const parts = name.trim().split(/\s+/)
  return parts[parts.length - 1] ?? name
}

export function hasWinsStandings(
  teams: Array<{ standings?: { wins: number } }>,
): boolean {
  return teams.some((team) => team.standings != null)
}
