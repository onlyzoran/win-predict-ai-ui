# Design system — @onlyzoran/win-predict-ai-ui

Короткий источник правды для людей и UI-агента (`/ui-agent`). Не энциклопедия: следуй существующим компонентам и Storybook-токенам.

## Философия

- Shared Vue 3 package в стиле **zinc / shadcn-vue**.
- **Design tokens живут в приложениях** (CSS variables). Этот пакет отдаёт markup с utility-классами (`bg-card`, `text-muted-foreground`, `rounded-lg`), которые ожидают ту же тему, что и `win-predict-ai`.
- Theme CSS из `.storybook/preview.css` — **только для Storybook**. Не публиковать и не импортировать в runtime apps.

## Цвета

Используй только семантические токены (Tailwind → CSS variables):

| Token | Типичные классы |
| --- | --- |
| background / foreground | `bg-background`, `text-foreground` |
| card | `bg-card`, `text-card-foreground` |
| popover | `bg-popover`, `text-popover-foreground` |
| primary / secondary / muted / accent | `bg-primary`, `text-muted-foreground`, … |
| destructive | `bg-destructive`, `text-destructive` |
| border / input / ring | `border-border`, `bg-input`, `ring-ring` |

**Do:** `bg-card`, `border-border`, `text-muted-foreground`, `focus-visible:ring-ring/50`.

**Don't (в новых компонентах):** сырые hex, `oklch(...)` в SFC, палитра `zinc-*` / `slate-*` как замена токенам.  
`ThemeToggle` ещё содержит `zinc-*` — **не копировать** как образец для новых компонентов.

Не меняй значения токенов в `.storybook/preview.css` без явной задачи в issue (токены apps — источник правды).

## Типографика

- Шрифты **наследует хост-приложение**. В пакете не подключать `@font-face`, не задавать `--font-*`, не тянуть Google Fonts.
- Иерархия через Tailwind: `text-sm` / `text-base` / `font-medium` / `font-semibold` + семантический цвет (`text-foreground`, `text-muted-foreground`).

## Радиус и глубина

- База: `--radius: 0.625rem` → `rounded-sm` / `rounded-md` / `rounded-lg` / `rounded-xl`.
- Поверхности: `border border-border`, при необходимости лёгкая тень (`shadow-sm` / `shadow-md`), как у popover/dropdown.
- Dark mode: класс `.dark` на `document.documentElement` (см. Storybook toolbar).

## Layout и код

- Vue SFC, `<script setup lang="ts">`.
- Стили: Tailwind utility + `cn()` из `src/utils/cn.ts` (`clsx` + `tailwind-merge`).
- Headless: **reka-ui** (shadcn-vue style) под `src/components/ui/` — внутренние примитивы, не обязаны быть в публичном API.
- Иконки: `@onlyzoran/win-predict-ai-icons` (peer), не копировать SVG в пакет без нужды.
- Не ломать peer dependencies (`vue`, `@vueuse/core`, icons, `reka-ui`).

## Где что класть

| Что | Куда |
| --- | --- |
| Публичный компонент | `src/components/<Name>.vue` |
| Внутренние reka/shadcn куски | `src/components/ui/<primitive>/` |
| Публичный экспорт | `src/index.ts` |
| Storybook | `stories/<Name>.stories.ts`, title `Win Predict AI / UI / <Name>` |

Стори: минимум **Default** + **Light** / **Dark** через `globals.theme`, по образцу `ThemeToggle.stories.ts`.

## Accessibility

- Интерактив: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50`.
- Кнопки/контролы: осмысленные `aria-*` (или пропсы aria, как у `ThemeToggle`).
- Не полагаться только на цвет для смысла.

## Card (и похожие поверхности)

- Фон/текст: `bg-card` / `text-card-foreground`.
- Структура в духе shadcn-vue: контейнер + слоты/подкомпоненты header / content / footer (и title/description при необходимости).
- Не изобретать отдельную палитру «карточки».
- Один согласованный API в PR; альтернативы — только в тексте PR, не несколько копий в коде.

## Do / Don't

**Do**

- Читать этот файл и существующие компоненты перед правками.
- Один новый публичный компонент = SFC + экспорт + Storybook.
- Обосновывать UX/UI в PR (токены, иерархия, a11y, отвергнутые варианты).

**Don't**

- Тащить theme CSS в npm-пакет / импортировать его в apps.
- Менять приложения-потребители из этого репо.
- Добавлять шрифты или сырые цвета «для красоты».
- Мержить без человека; UI-агент только открывает PR.
