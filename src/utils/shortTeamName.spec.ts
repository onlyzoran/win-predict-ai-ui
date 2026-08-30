import { describe, expect, it } from 'vitest'
import { shortTeamName, teamNameLabels } from './shortTeamName'

describe('shortTeamName', () => {
  it('uses the last word as nickname', () => {
    expect(shortTeamName('New York Yankees')).toBe('Yankees')
    expect(shortTeamName('Los Angeles Dodgers')).toBe('Dodgers')
    expect(shortTeamName('Milwaukee Brewers')).toBe('Brewers')
    expect(shortTeamName('Philadelphia Phillies')).toBe('Phillies')
    expect(shortTeamName('Houston Astros')).toBe('Astros')
    expect(shortTeamName('Baltimore Orioles')).toBe('Orioles')
  })

  it('keeps multi-word MLB nicknames intact', () => {
    expect(shortTeamName('Boston Red Sox')).toBe('Red Sox')
    expect(shortTeamName('Chicago White Sox')).toBe('White Sox')
    expect(shortTeamName('Toronto Blue Jays')).toBe('Blue Jays')
  })

  it('passes through single-word names', () => {
    expect(shortTeamName('Athletics')).toBe('Athletics')
    expect(shortTeamName('Arsenal')).toBe('Arsenal')
  })

  it('trims surrounding whitespace', () => {
    expect(shortTeamName('  New York Yankees  ')).toBe('Yankees')
  })

  it('returns empty string for empty input', () => {
    expect(shortTeamName('')).toBe('')
    expect(shortTeamName('   ')).toBe('')
  })

  it('does not split compound nicknames that are not in the exception list', () => {
    expect(shortTeamName('Golden State Warriors')).toBe('Warriors')
  })
})

describe('teamNameLabels', () => {
  it('returns full and short labels', () => {
    expect(teamNameLabels('Boston Red Sox')).toEqual({
      full: 'Boston Red Sox',
      short: 'Red Sox',
    })
  })

  it('trims the full label', () => {
    expect(teamNameLabels('  New York Yankees  ')).toEqual({
      full: 'New York Yankees',
      short: 'Yankees',
    })
  })
})
