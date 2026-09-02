import { describe, expect, it } from 'vitest'
import { shortTeamName, teamAbbreviation, teamNameLabels } from './shortTeamName'

describe('teamAbbreviation', () => {
  it('maps MLB teams to official 3-letter codes', () => {
    expect(teamAbbreviation('Cincinnati Reds')).toBe('CIN')
    expect(teamAbbreviation('Milwaukee Brewers')).toBe('MIL')
    expect(teamAbbreviation('Los Angeles Dodgers')).toBe('LAD')
    expect(teamAbbreviation('Boston Red Sox')).toBe('BOS')
    expect(teamAbbreviation('New York Yankees')).toBe('NYY')
    expect(teamAbbreviation('Philadelphia Phillies')).toBe('PHI')
    expect(teamAbbreviation('Houston Astros')).toBe('HOU')
    expect(teamAbbreviation('Baltimore Orioles')).toBe('BAL')
    expect(teamAbbreviation('Toronto Blue Jays')).toBe('TOR')
    expect(teamAbbreviation('Chicago White Sox')).toBe('CWS')
  })

  it('does not abbreviate Others aggregates', () => {
    expect(teamAbbreviation('Others (3)')).toBe('Others (3)')
    expect(teamAbbreviation('Others (12)')).toBe('Others (12)')
  })

  it('trims surrounding whitespace', () => {
    expect(teamAbbreviation('  Cincinnati Reds  ')).toBe('CIN')
  })

  it('returns empty string for empty input', () => {
    expect(teamAbbreviation('')).toBe('')
    expect(teamAbbreviation('   ')).toBe('')
  })

  it('falls back for unknown teams', () => {
    expect(teamAbbreviation('Arsenal')).toBe('ARS')
    expect(teamAbbreviation('Golden State Warriors')).toBe('GSW')
  })
})

describe('shortTeamName', () => {
  it('is an alias for teamAbbreviation', () => {
    expect(shortTeamName('Milwaukee Brewers')).toBe('MIL')
    expect(shortTeamName('Others (2)')).toBe('Others (2)')
  })
})

describe('teamNameLabels', () => {
  it('returns full and abbreviated labels', () => {
    expect(teamNameLabels('Boston Red Sox')).toEqual({
      full: 'Boston Red Sox',
      short: 'BOS',
    })
  })

  it('trims the full label', () => {
    expect(teamNameLabels('  Los Angeles Dodgers  ')).toEqual({
      full: 'Los Angeles Dodgers',
      short: 'LAD',
    })
  })
})
