import type { RankSeries } from '../types'

/** Rank movement mock — 6 teams over 8 weeks. */
export const mockRankSeries: RankSeries = {
  teams: [
    { name: 'Los Angeles Dodgers', color: 'var(--chart-1)' },
    { name: 'New York Yankees', color: 'var(--chart-2)' },
    { name: 'Milwaukee Brewers', color: 'var(--chart-3)' },
    { name: 'Philadelphia Phillies', color: 'var(--chart-4)' },
    { name: 'Houston Astros', color: 'var(--chart-5)' },
    { name: 'Baltimore Orioles', color: 'var(--primary)' },
  ],
  points: [
    {
      date: '2025-04-01',
      x: 0,
      ranks: {
        'Los Angeles Dodgers': 2,
        'New York Yankees': 1,
        'Milwaukee Brewers': 4,
        'Philadelphia Phillies': 5,
        'Houston Astros': 3,
        'Baltimore Orioles': 6,
      },
    },
    {
      date: '2025-05-01',
      x: 1,
      ranks: {
        'Los Angeles Dodgers': 1,
        'New York Yankees': 2,
        'Milwaukee Brewers': 3,
        'Philadelphia Phillies': 5,
        'Houston Astros': 4,
        'Baltimore Orioles': 6,
      },
    },
    {
      date: '2025-06-01',
      x: 2,
      ranks: {
        'Los Angeles Dodgers': 1,
        'New York Yankees': 3,
        'Milwaukee Brewers': 2,
        'Philadelphia Phillies': 4,
        'Houston Astros': 5,
        'Baltimore Orioles': 6,
      },
    },
    {
      date: '2025-07-01',
      x: 3,
      ranks: {
        'Los Angeles Dodgers': 1,
        'New York Yankees': 2,
        'Milwaukee Brewers': 3,
        'Philadelphia Phillies': 4,
        'Houston Astros': 6,
        'Baltimore Orioles': 5,
      },
    },
    {
      date: '2025-08-01',
      x: 4,
      ranks: {
        'Los Angeles Dodgers': 1,
        'New York Yankees': 2,
        'Milwaukee Brewers': 4,
        'Philadelphia Phillies': 3,
        'Houston Astros': 5,
        'Baltimore Orioles': 6,
      },
    },
    {
      date: '2025-09-01',
      x: 5,
      ranks: {
        'Los Angeles Dodgers': 1,
        'New York Yankees': 2,
        'Milwaukee Brewers': 3,
        'Philadelphia Phillies': 4,
        'Houston Astros': 5,
        'Baltimore Orioles': 6,
      },
    },
    {
      date: '2025-10-01',
      x: 6,
      ranks: {
        'Los Angeles Dodgers': 1,
        'New York Yankees': 2,
        'Milwaukee Brewers': 3,
        'Philadelphia Phillies': 4,
        'Houston Astros': 6,
        'Baltimore Orioles': 5,
      },
    },
    {
      date: '2025-10-15',
      x: 7,
      ranks: {
        'Los Angeles Dodgers': 1,
        'New York Yankees': 2,
        'Milwaukee Brewers': 3,
        'Philadelphia Phillies': 4,
        'Houston Astros': 5,
        'Baltimore Orioles': 6,
      },
    },
  ],
}
