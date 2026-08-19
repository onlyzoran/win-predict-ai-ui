import type { Meta, StoryObj } from '@storybook/vue3'
import { computed, ref } from 'vue'
import { IconArrowsSort } from '@onlyzoran/win-predict-ai-icons'
import { Button } from '../src/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../src/components/ui/dropdown-menu'
import { withAllPalettes } from './storyHelpers'

const meta = {
  title: 'Win Predict AI / UI / DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

const menuComponents = {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  Button,
  IconArrowsSort,
}

function actionsMenuTemplate() {
  return `
    <DropdownMenu :modal="false">
      <DropdownMenuTrigger as-child>
        <Button variant="outline">Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" class="w-48">
        <DropdownMenuLabel>League</DropdownMenuLabel>
        <DropdownMenuItem>Pin to dashboard</DropdownMenuItem>
        <DropdownMenuItem>Copy share link</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>View</DropdownMenuLabel>
        <DropdownMenuItem inset>Show standings table</DropdownMenuItem>
        <DropdownMenuItem inset disabled>Show playoff bracket</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Remove from watchlist</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  `
}

function sortRadioTemplate() {
  return `
    <DropdownMenu :modal="false">
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" size="sm" aria-label="Sort tournaments">
          <IconArrowsSort class="size-4" />
          <span>Sort: {{ sortLabel }}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup v-model="sort">
          <DropdownMenuRadioItem value="popular">Popular</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="endingSoon">Ending soon</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  `
}

export const Default: Story = {
  render: () => ({
    components: menuComponents,
    template: actionsMenuTemplate(),
  }),
}

export const {
  ZincLight,
  ZincDark,
  SlateTealLight,
  SlateTealDark,
  ClaudePlusLight,
  ClaudePlusDark,
} = withAllPalettes(Default)

export const RadioGroup: Story = {
  render: () => ({
    components: menuComponents,
    setup() {
      const sort = ref('popular')
      const labels: Record<string, string> = {
        popular: 'Popular',
        name: 'Name',
        endingSoon: 'Ending soon',
      }
      const sortLabel = computed(() => labels[sort.value] ?? sort.value)
      return { sort, sortLabel }
    },
    template: sortRadioTemplate(),
  }),
}

export const {
  RadioGroupZincLight,
  RadioGroupZincDark,
  RadioGroupSlateTealLight,
  RadioGroupSlateTealDark,
  RadioGroupClaudePlusLight,
  RadioGroupClaudePlusDark,
} = withAllPalettes(RadioGroup, 'RadioGroup')
