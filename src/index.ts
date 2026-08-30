export { cn } from './utils/cn'

export { DEFAULT_PALETTE, PALETTES, type Palette } from './themes/palettes'

export { default as ThemeToggle } from './components/ThemeToggle.vue'
export { default as LocaleSwitcher } from './components/LocaleSwitcher.vue'
export { default as AppHeaderShell } from './components/AppHeaderShell.vue'
export { default as BrandTitle } from './components/BrandTitle.vue'
export { default as SearchInput } from './components/SearchInput.vue'
export { default as StandingsGlossary } from './components/StandingsGlossary.vue'
export {
  FOOTBALL_STANDINGS_GLOSSARY,
  resolveStandingsGlossaryEntries,
  type StandingsGlossaryEntry,
  type StandingsGlossaryPreset,
} from './components/standings-glossary'

export { Button, buttonVariants, type ButtonVariant, type ButtonSize, type ButtonVariants } from './components/ui/button'
export { Badge, badgeVariants, type BadgeVariant, type BadgeVariants } from './components/ui/badge'
export { Progress } from './components/ui/progress'
export { Separator } from './components/ui/separator'
export { Skeleton } from './components/ui/skeleton'

export { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs'

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card'

export {
  ChartContainer,
  ChartCrosshair,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  componentToString,
  provideChartContext,
  useChart,
  THEMES,
  type ChartConfig,
} from './components/ui/chart'

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './components/ui/dropdown-menu'

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './components/ui/sheet'
