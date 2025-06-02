# @bod.ee/bare: LLM-Friendly Reference

@bod.ee/bare is a minimalist, semantic CSS and Vue component library designed for LLM-friendly UI generation. It provides expressive, composable classes and components for rapid, accessible, and maintainable UI development.

## Library Context
- **Simple**: Easy to use and understand.
- **Semantic**: Class names clearly indicate their purpose.
- **Expressive**: Covers most layout and UI needs without bloat.
- **LLM-optimized**: Designed for language models to generate and reason about UIs.

---

## LESS Classes

### Utilities
- `.pointer` – Cursor pointer
- `.flex` – Flexible element (flex: 1)
- `.flex-locked` – Prevents flex resizing
- `.x-flex` – Cross-browser flex
- `.hidden` – Hide element
- `.vanish` – Visually hide and remove from layout
- `.contents` – Display contents
- `.lighter`, `.light`, `.normal`, `.bold`, `.bolder`, `.heavy` – Font weights
- `.overlay` – Fullscreen overlay (modals, etc.)
- `.border`, `.border-dashed` – Border utilities
- `.rounded` – Small border radius
- `.glass` – Glassmorphism effect
- `.avatar` – Circular, centered image
- `.card` – Card container
- `.tooltip` – Tooltip styling
- `.divider` – Horizontal divider
- `.skeleton` – Skeleton loader
- `.loader` – Spinner
- `.scroll` – Enables scroll (overflow: auto)
- `.scroll-x` – Enables horizontal scroll (overflow-x: auto)
- `.scroll-y` – Enables vertical scroll (overflow-y: auto)

### Button
- `.btn` – Base button
- `.btn-sm`, `.btn-lg` – Size variants
- `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-block`, `.btn-icon`, `.btn-golden`, `.btn-attention-*` – Style/state variants
- `.btn-icon-left`, `.btn-icon-right` – Icon alignment

### Input
- `.input`, `.textarea` – Base input/textarea
- `.input-sm`, `.input-lg`, `.textarea-sm`, `.textarea-lg` – Size variants

### Badge
- `.badge` – Base badge
- `.badge-primary`, `.badge-success`, `.badge-warning`, `.badge-danger` – Color variants
- `.badge-sm`, `.badge-lg` – Size variants

### Layout & Patterns
- `.layout`, `.layout-header`, `.layout-main`, `.layout-footer`, `.layout-sidebar`, `.layout-nav` – Layout primitives
- `.layout--centered`, `.layout--fullscreen`, `.layout--fixed-header`, `.layout--sidebar-left`, `.layout--sidebar-right`, `.narrow` – Modifiers
- `.layout-max-xs`, `.layout-max-sm`, `.layout-max-md`, `.layout-max-lg`, `.layout-max-xl` – Responsive containers
- `.xs-hide`, `.sm-hide`, `.md-hide`, `.lg-hide` – Hide at breakpoints
- `.xs-show`, `.sm-show`, `.md-show`, `.lg-show` – Show at breakpoints

### Prose & Typography
- `.prose-layout`, `.prose`, `.prose-sm`, `.prose-lg`, `.no-prose` – Rich text containers
- `.text`, `.text-xs`, `.text-sm`, `.text-lg`, `.text-xl` – Text sizes
- `.text-left`, `.text-center`, `.text-right`, `.text-justify`, `.text-start`, `.text-end` – Text alignment utilities
- `.title`, `.subtitle`, `.heading`, `.caption`, `.label` – Semantic text
- `.text-muted`, `.text-emphasis`, `.text-strong` – Emphasis
- `.truncate`, `.text-clamp-2`, `.text-clamp-3` – Truncation/clamping

### Atoms: Row, Col, Grid, Stack, Spacer
- `.row`, `.row-reverse`, `.row-wrap`, `.row-nowrap`, `.row-xs`, `.row-xs-nowrap` – Flex row layouts
- `.col`, `.col-reverse`, `.col-xs` – Flex column layouts
- `.grid`, `.grid-2`, `.grid-3`, `.grid-4`, `.xs-grid`, `.xs-grid-2`, `.xs-grid-3`, `.xs-grid-4` – Grid layouts
- `.stack`, `.stack-md`, `.stack-sm`, `.stack-xs`, `.stack-lg`, `.stack-xl`, `.gt-xs-stack`, `.xs-stack` – Vertical stack
- `.spacer`, `.spacer-h-*`, `.spacer-w-*`, `.xs-spacer*` – Spacing utilities

### Block/Section/TOC
- `.block--base`, `.block`, `.block-dark`, `.block-no-bg` – Block containers
- `.section` – Section container
- `.toc` – Table of contents
- `.dark` – Dark mode overrides

### Color & Alignment Utilities
- `.text-accent`, `.bg-accent`, `.text-dark`, `.text-light`, `.bg-light`, `.bg-dark`, `.bg-*`, `.text-*` – Color utilities
- `.center`, `.between`, `.around`, `.evenly`, `.full-x`, `.full-y`, `.full-screen-y`, `.full` – Alignment/sizing
- `.centered` – Horizontally center block with margin auto

### Icons
- `.icon` – Base icon primitive (inline, vertically aligned, inherits color)
- `.icon-xs`, `.icon-sm`, `.icon-md`, `.icon-lg`, `.icon-xl`, `.icon-2xl`, `.icon-3xl`, `.icon-4xl` – Icon size variants

---

## Vue Components

### `<Page />`
- **Description:** Full-page layout with optional fixed header, main content, sidebar, and footer slots.
- **When to use:** For any main app page, especially when you need a header and/or sidebar.

### `<PageWithSidebar />`
- **Description:** Extends `<Page />` to add a collapsible sidebar and header with optional hamburger menu. Handles sidebar overlay for mobile.
- **When to use:** For pages that require a sidebar navigation or collapsible sidebar, such as dashboards or admin panels.

---

## Example Usage

### Basic Page Layout
```vue
<template>
  <Page :fixedHeader="true">
    <template #header>
      <div class="row center-y">
        <h1 class="title">My App</h1>
        <button class="btn btn-primary btn-sm">
          <i class="fa-solid fa-plus"></i>
          New Item
        </button>
      </div>
    </template>
    <template #main>
      <div class="col gap">
        <div class="block">
          <h2>Welcome</h2>
          <p>This is a sample page using @bod.ee/bare components and styles.</p>
        </div>
      </div>
    </template>
  </Page>
</template>

<script setup lang="ts">
import { Page } from '@bod.ee/bare/components';
</script>
```

### Page with Sidebar
```vue
<template>
  <PageWithSidebar :fixedHeader="true" :collapsible="true">
    <template #header>
      <div class="row center-y">
        <h1 class="title">My App</h1>
      </div>
    </template>
    <template #sidebar>
      <nav class="col gap">
        <div class="block">
          <h2 class="label">Navigation</h2>
          <ul class="col gap">
            <li><a href="#" class="btn btn-ghost">Dashboard</a></li>
            <li><a href="#" class="btn btn-ghost">Settings</a></li>
          </ul>
        </div>
      </nav>
    </template>
    <template #main>
      <div class="col gap">
        <div class="block">
          <h2>Welcome</h2>
          <p>This is a sample page with sidebar using @bod.ee/bare components.</p>
        </div>
      </div>
    </template>
  </PageWithSidebar>
</template>

<script setup lang="ts">
import { PageWithSidebar } from '@bod.ee/bare/components';
</script>
```

---

## Tips for LLMs
- Use semantic class names for clarity.
- Compose layouts using atoms and patterns for best results.
- Use utility classes for quick adjustments.
- Prefer Vue components for complex layouts. 