# @onlyzoran/win-predict-ai-ui

Shared Vue 3 UI components for Win Predict AI: header shell, theme toggle, locale switcher.

Design tokens (CSS variables) live in `src/themes/` and ship with the package — app and admin import `@onlyzoran/win-predict-ai-ui/themes`.

**Design for humans and agents:** see [`DESIGN.md`](./DESIGN.md) (tokens, layout, Card conventions, do/don't). UI-agent: `/ui-agent` on an issue (new PR) or on an open PR (same-branch revision).

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
| `@onlyzoran/win-predict-ai-icons` | ^0.13 |
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

## Темы (CSS tokens)

Палитры: `zinc`, `slate-teal`, `claude-plus`, `pastel`. Единый источник — `src/themes/*.css`.

```css
/* все палитры */
@import '@onlyzoran/win-predict-ai-ui/themes';

/* или одна */
@import '@onlyzoran/win-predict-ai-ui/themes/claude-plus.css';
```

Активация на `html` (или корневом контейнере): `data-palette="claude-plus"`, dark mode — класс `.dark` на том же элементе.

Константы для runtime: `PALETTES`, `DEFAULT_PALETTE`, тип `Palette` из основного экспорта пакета.

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

Публичный каталог: [GitHub Pages](https://onlyzoran.github.io/win-predict-ai-ui/) (деплой из `main` на ветку `gh-pages`).

**Настройки репозитория (один раз):**

1. **Settings → Pages → Source:** Deploy from a branch → Branch `gh-pages` / `/ (root)`.
2. **Settings → Actions → General → Workflow permissions:** Read and write permissions.

Для pull request Actions собирает Storybook и деплоит превью; в PR появится комментарий со ссылкой вида
`https://onlyzoran.github.io/win-predict-ai-ui/pr-preview/pr-<N>/`.
После закрытия PR превью удаляется.

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

После мержа в `main` workflow **Release package** сам поднимает версию и публикует пакет.

| Как задать bump | Результат |
| --- | --- |
| новые `.vue` в `src/components/` (кроме внутреннего `ui/dropdown-menu`) | `minor` |
| без новых компонентов | `patch` |
| `[major]` / `[minor]` / `[patch]` в сообщении коммита | принудительно |
| `[skip release]` | не публиковать |

Вручную: **Actions → Release package → Run workflow** (выбор patch / minor / major).

Локально (если нужно):

```bash
export NODE_AUTH_TOKEN=ghp_xxxxxxxx   # write:packages
npm version patch|minor|major
npm publish
git push && git push --tags
```

`prepublishOnly` запускает `build` перед publish. Registry: `https://npm.pkg.github.com` (см. `.npmrc`).

## Структура

```
src/
  components/
    ThemeToggle.vue
    LocaleSwitcher.vue
    AppHeaderShell.vue
    ui/dropdown-menu/   # минимальный shadcn/reka набор (внутренний)
  themes/               # CSS tokens (zinc, slate-teal, claude-plus) — в npm
  utils/cn.ts
  index.ts
stories/                # Storybook stories (не в npm)
.storybook/             # preview + theme CSS (не в npm)
dist/                   # публикуется
```
