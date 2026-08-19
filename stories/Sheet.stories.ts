import type { Meta, StoryObj } from '@storybook/vue3'
import { Button } from '../src/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../src/components/ui/sheet'
import { withAllPalettes } from './storyHelpers'

const meta = {
  title: 'Win Predict AI / UI / Sheet',
  component: Sheet,
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

const sheetComponents = {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
  Button,
}

function sheetWithHeaderFooter(side: 'top' | 'right' | 'bottom' | 'left') {
  return `
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline">Open ${side} sheet</Button>
      </SheetTrigger>
      <SheetContent side="${side}">
        <SheetHeader>
          <SheetTitle>Team details</SheetTitle>
          <SheetDescription>
            Standings row drill-down for Los Angeles Dodgers — World Series odds and recent movement.
          </SheetDescription>
        </SheetHeader>
        <div class="flex-1 overflow-y-auto px-4 text-sm text-muted-foreground">
          <p>Win probability: <span class="font-medium text-foreground">17%</span></p>
          <p class="mt-2">Conference: NL West · Position: 1</p>
          <p class="mt-2">Last 10 games: 7-3</p>
        </div>
        <SheetFooter>
          <SheetClose as-child>
            <Button variant="outline">Close</Button>
          </SheetClose>
          <Button>View full standings</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  `
}

export const Default: Story = {
  render: () => ({
    components: sheetComponents,
    template: sheetWithHeaderFooter('right'),
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

export const SideVariants: Story = {
  render: () => ({
    components: sheetComponents,
    template: `
      <div class="flex flex-wrap gap-3">
        ${(['top', 'right', 'bottom', 'left'] as const)
          .map((side) => sheetWithHeaderFooter(side).trim())
          .join('\n')}
      </div>
    `,
  }),
}

export const {
  SideVariantsZincLight,
  SideVariantsZincDark,
  SideVariantsSlateTealLight,
  SideVariantsSlateTealDark,
  SideVariantsClaudePlusLight,
  SideVariantsClaudePlusDark,
} = withAllPalettes(SideVariants, 'SideVariants')
