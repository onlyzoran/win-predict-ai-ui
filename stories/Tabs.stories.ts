import type { Meta, StoryObj } from '@storybook/vue3'
import { IconPencil, IconPin, IconSearch } from '@onlyzoran/win-predict-ai-icons'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/components/ui/tabs'

const meta = {
  title: 'Win Predict AI / UI / Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

function tabsTemplate() {
  return `
    <Tabs default-value="overview" class="w-full max-w-md">
      <TabsList aria-label="Example tabs">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="stats">Stats</TabsTrigger>
        <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">General information for the selected item.</p>
      </TabsContent>
      <TabsContent value="stats" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">Metrics and performance data.</p>
      </TabsContent>
      <TabsContent value="disabled" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">This panel is not reachable while disabled.</p>
      </TabsContent>
    </Tabs>
  `
}

export const Default: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    template: tabsTemplate(),
  }),
}

export const Light: Story = {
  globals: { theme: 'light' },
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    template: tabsTemplate(),
  }),
}

export const Dark: Story = {
  globals: { theme: 'dark' },
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    template: tabsTemplate(),
  }),
}

export const NarrowScroll: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    template: `
      <Tabs default-value="tab-1" class="w-56">
        <TabsList aria-label="Scrollable tabs">
          <TabsTrigger value="tab-1">First</TabsTrigger>
          <TabsTrigger value="tab-2">Second tab</TabsTrigger>
          <TabsTrigger value="tab-3">Third tab</TabsTrigger>
          <TabsTrigger value="tab-4">Fourth tab</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1" class="text-sm text-muted-foreground">Content for the first tab.</TabsContent>
        <TabsContent value="tab-2" class="text-sm text-muted-foreground">Content for the second tab.</TabsContent>
        <TabsContent value="tab-3" class="text-sm text-muted-foreground">Content for the third tab.</TabsContent>
        <TabsContent value="tab-4" class="text-sm text-muted-foreground">Content for the fourth tab.</TabsContent>
      </Tabs>
    `,
  }),
}

function withIconsTemplate() {
  return `
    <Tabs default-value="search" class="w-full max-w-md">
      <TabsList aria-label="Tabs with icons">
        <TabsTrigger value="search" variant="with-icon">
          <IconSearch aria-hidden="true" />
          Search
        </TabsTrigger>
        <TabsTrigger value="pinned" variant="with-icon">
          <IconPin aria-hidden="true" />
          Pinned
        </TabsTrigger>
        <TabsTrigger value="edit" variant="with-icon" disabled>
          <IconPencil aria-hidden="true" />
          Edit
        </TabsTrigger>
      </TabsList>
      <TabsContent value="search" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">Search results and filters.</p>
      </TabsContent>
      <TabsContent value="pinned" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">Pinned items for quick access.</p>
      </TabsContent>
      <TabsContent value="edit" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">Edit mode is disabled in this example.</p>
      </TabsContent>
    </Tabs>
  `
}

export const WithIcons: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent, IconSearch, IconPin, IconPencil },
    template: withIconsTemplate(),
  }),
}

export const WithIconsLight: Story = {
  globals: { theme: 'light' },
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent, IconSearch, IconPin, IconPencil },
    template: withIconsTemplate(),
  }),
}

export const WithIconsDark: Story = {
  globals: { theme: 'dark' },
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent, IconSearch, IconPin, IconPencil },
    template: withIconsTemplate(),
  }),
}

export const IconOnly: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent, IconSearch, IconPin, IconPencil },
    template: `
      <Tabs default-value="search" class="w-fit">
        <TabsList aria-label="Icon-only tabs">
          <TabsTrigger value="search" variant="icon-only" aria-label="Search">
            <IconSearch aria-hidden="true" />
          </TabsTrigger>
          <TabsTrigger value="pinned" variant="icon-only" aria-label="Pinned">
            <IconPin aria-hidden="true" />
          </TabsTrigger>
          <TabsTrigger value="edit" variant="icon-only" aria-label="Edit" disabled>
            <IconPencil aria-hidden="true" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="search" class="mt-2 text-sm text-muted-foreground">Search panel.</TabsContent>
        <TabsContent value="pinned" class="mt-2 text-sm text-muted-foreground">Pinned panel.</TabsContent>
        <TabsContent value="edit" class="mt-2 text-sm text-muted-foreground">Edit panel.</TabsContent>
      </Tabs>
    `,
  }),
}
