# @onlyzoran/win-predict-ai-ui

Shared Vue 3 UI components for Win Predict AI: header shell, theme toggle, locale switcher.

Design tokens (CSS variables) stay in the apps — this package ships utility-class markup that expects the same zinc / shadcn-vue theme as `win-predict-ai`.

## Установка

Пакет публикуется в **GitHub Packages**, не в публичный npm.

### 1. `.npmrc` в проекте-потребителе

```ini
@onlyzoran:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

### 2. Токен

GitHub PAT с `read:packages` (install) или `write:packages` (publish):

```bash
export NODE_AUTH_TOKEN=ghp_xxxxxxxx
```

### 3. Install

```bash
npm install @onlyzoran/win-predict-ai-ui
```

### Peer dependencies

| Package | Version |
| --- | --- |
| `vue` | ^3.3 |
| `@vueuse/core` | ^14 |
| `@onlyzoran/win-predict-ai-icons` | ^0.4 |
| `reka-ui` | ^2 |

## Tailwind content / sources

Компоненты используют utility-классы (`bg-background`, `text-muted-foreground`, …). Без сканирования исходников пакета стили **не попадут** в CSS.

### Vite + Tailwind v4

В CSS приложения (рядом с `@import 'tailwindcss'`):

```css
@source "../node_modules/@onlyzoran/win-predict-ai-ui/dist";
```

Либо укажите путь к установленному пакету так, как у вас резолвится `node_modules` (monorepo / pnpm: проверьте реальный путь).

Если публикуете/линкуете исходники вместо `dist`, добавьте:

```css
@source "../node_modules/@onlyzoran/win-predict-ai-ui/src";
```

> В `dist` классы остаются строками в JS — Tailwind v4 `@source` по ним тоже подхватывает. При сомнениях сканируйте `src` через `file:` / workspace link.

### Nuxt (`win-predict-ai-admin` style)

В `tailwind.config.ts` добавьте путь к пакету в `content`:

```ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './node_modules/@onlyzoran/win-predict-ai-ui/dist/**/*.{js,mjs}',
  ],
  // …
} satisfies Config
```

Для Tailwind v4 в CSS:

```css
@source "../../node_modules/@onlyzoran/win-predict-ai-ui/dist";
```

Приложения уже шарят zinc/shadcn CSS variables — **не** импортируйте theme CSS из этого пакета в runtime apps.

## Использование

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { AppHeaderShell } from '@onlyzoran/win-predict-ai-ui'
import { IconLogin } from '@onlyzoran/win-predict-ai-icons'
import { locale, localeLabels, locales, setLocale } from '@/i18n'

const currentLocale = ref(locale.value)

function onLocaleUpdate(code: string) {
  currentLocale.value = code
  setLocale(code)
}
</script>

<template>
  <AppHeaderShell
    :locale="currentLocale"
    :locales="locales"
    :locale-labels="localeLabels"
    :locale-aria-label="t('language.label')"
    :theme-aria-label-light="t('theme.switchToLight')"
    :theme-aria-label-dark="t('theme.switchToDark')"
    github-url="https://github.com/onlyzoran/win-predict-ai"
    @update:locale="onLocaleUpdate"
  >
    <template #brand>
      <RouterLink to="/" class="font-semibold text-foreground hover:opacity-80">
        {{ t('app.title') }}
      </RouterLink>
    </template>
    <template #actions>
      <a href="…" class="inline-flex items-center gap-1.5 …">
        <IconLogin :size="16" />
        <span class="hidden sm:inline">{{ t('auth.login') }}</span>
      </a>
    </template>
  </AppHeaderShell>
</template>
```

Компоненты по отдельности:

```ts
import {
  ThemeToggle,
  LocaleSwitcher,
  AppHeaderShell,
  cn,
} from '@onlyzoran/win-predict-ai-ui'
```

- **`ThemeToggle`** — pill Moon/Sun, `useColorMode` (`auto` / `light` / `dark`). Aria через `ariaLabelLight` / `ariaLabelDark`.
- **`LocaleSwitcher`** — controlled: `v-model`, `locales`, `labels`, `ariaLabel`.
- **`AppHeaderShell`** — fixed header, слоты `#brand` / `#actions`, внутри locale + theme (+ optional `githubUrl`).
- **`cn`** — `clsx` + `tailwind-merge`.

Auth, RouterLink, Nuxt `navigateTo` и locale JSON остаются в приложениях.

## Storybook

```bash
npm install
npm run storybook
```

Откроется превью на `http://localhost:6006`. Theme CSS для превью — копия токенов apps (только Storybook).

Публичный каталог: [GitHub Pages](https://onlyzoran.github.io/win-predict-ai-ui/) (деплой из `main` через Actions). В настройках репозитория: **Settings → Pages → Source: GitHub Actions**.

Secret `NODE_AUTH_TOKEN` должен уметь **checkout** приватного `onlyzoran/win-predict-ai-icons` (достаточно `contents: read` / fine-grained: Contents read на icons). CI ставит icons через `file:../win-predict-ai-icons`, как локально.

```bash
npm run build-storybook
```

## Разработка

```bash
npm install
npm run build
npm run type-check
npm run storybook
```

Сборка: Vite library mode (`es`) → `dist/index.js` + `.d.ts` через `vue-tsc`.

## Публикация в GitHub Packages

1. В `package.json`: `"name": "@onlyzoran/win-predict-ai-ui"`, `publishConfig.registry` → GitHub Packages.
2. `.npmrc` со scope `@onlyzoran` и `${NODE_AUTH_TOKEN}`.
3. PAT с `write:packages`:

```bash
export NODE_AUTH_TOKEN=ghp_xxxxxxxx
npm run build
npm publish
```

`prepublishOnly` запускает `build` перед publish.

## Структура

```
src/
  components/
    ThemeToggle.vue
    LocaleSwitcher.vue
    AppHeaderShell.vue
    ui/dropdown-menu/   # минимальный shadcn/reka набор (внутренний)
  utils/cn.ts
  index.ts
stories/                # Storybook stories (не в npm)
.storybook/             # preview + theme CSS (не в npm)
dist/                   # публикуется
```
