# @livz/bare — LLM-Friendly Guidelines

## Purpose

@livz/bare is a minimalist, semantic CSS library and Vue component set designed for LLM-friendly UI generation. It provides expressive, composable building blocks for layouts, structure, and common UI needs, with a focus on clarity, simplicity, and automation-readiness.

---

## Installation

```bash
bun add @livz/bare
# or
yarn add @livz/bare
# or
npm install @livz/bare
```

**CDN:**
```html
<link rel="stylesheet" href="https://unpkg.com/@livz/bare@latest/dist/bare.css" />
```

---

## Usage

### CSS
- Import in your main CSS/LESS/Sass file:
  ```css
  @import '@livz/bare/dist/bare.css';
  ```
- Or use a `<link>` tag in HTML (see CDN above).

### Vue Components
- Import CSS and components:
  ```ts
  import '@livz/bare/dist/bare.css';
  import { Page, PageWithSidebar } from '@livz/bare/components';
  ```

---

## Building Blocks

### 1. Atoms (Layout & Alignment)
- `.row`, `.col`, `.center`, `.start`, `.end`, `.between`, `.around`, `.evenly`
- Responsive: `.row-xs`, `.col-xs`, `.xs-center`, `.xs-between`, etc.
- Wrapping: `.row-nowrap`, `.row-wrap`, etc.
- Alignment: `.center-x`, `.center-y`, `.start-x`, `.end-y`, etc.

### 2. Patterns (Layout Structures)
- `.layout`, `.layout-header`, `.layout-main`, `.layout-footer`, `.layout-sidebar`, `.layout-nav`
- Modifiers: `.layout--centered`, `.layout--fullscreen`, `.layout--fixed-header`, `.layout--sidebar-left`, `.layout--sidebar-right`, `.layout--stack`, `.layout--hide-sidebar`, `.narrow`

### 3. Primitives (Styled Elements)
- `.block`, `.section`, `.toc`, `.button`, `.input`, `.badge`

### 4. Components (Vue)
- `<Page>`, `<PageWithSidebar>`
- Slots: `header`, `main`, `sidebar`, `footer`
- Props: `fixedHeader`, `collapsible`, etc.

### 5. Utility Classes
- `hidden`, `vanish`, `flex`, `flex-locked`, `x-flex`, `overlay`, `lighter`, `bold`, `heavy`, etc.
- Responsive show/hide: `xs-hide`, `sm-hide`, `md-hide`, `lg-hide`, `xs-show`, etc.
- Color: `text-{50-950}`, `bg-{50-950}`, `text-dark`, `bg-light`, `text-accent`, etc.
- Sizing: `full-x`, `full-y`, `full`, etc.

## Minimal Utility Classes

- `.border`: 1px solid neutral border for minimalist separation
- `.border-dashed`: 1px dashed neutral border
- `.rounded`: Small border-radius for subtle rounding
- `.glass`: Glassmorphism effect (blurred, semi-transparent background)
- `.avatar`: Circular image/avatar container
- `.card`: Card container with padding, shadow, and rounded corners
- `.tooltip`: Simple tooltip styling
- `.divider`: Horizontal divider line
- `.skeleton`: Skeleton loading shimmer
- `.loader`: Spinner/loader animation

---

## Examples

### Basic Page Layout
```