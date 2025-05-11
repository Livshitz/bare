# @bod.ee/bare

@bod.ee/bare is a minimalist, semantic CSS library designed specifically for LLM-friendly UI generation. It provides a set of basic, expressive styles that focus primarily on layouts and structure, with additional utility classes for common needs.

The library aims to be:

- **Simple**: Easy to understand and implement
- **Semantic**: Class names clearly indicate their purpose
- **Expressive**: Provides enough styling options without overwhelming complexity
- **LLM-optimized**: Designed to be easily understood by language models for automated UI generation

## Installation

```bash
npm install @bod.ee/bare
# or
yarn add @bod.ee/bare
# or
bun add @bod.ee/bare
```

## Usage

### CSS Usage

Import the CSS file into your project:

```css
/* In your main CSS/Less/Sass file */
@import '@bod.ee/bare/dist/bare.css';
```

Or via a link tag in your HTML:

```html
<link rel="stylesheet" href="path/to/node_modules/@bod.ee/bare/dist/bare.css" />
```

Or via CDN (unpkg):

```html
<link rel="stylesheet" href="https://unpkg.com/@bod.ee/bare@latest/dist/bare.css" />
```

### Vue Component Usage

If you're using Vue, you can import components:

```javascript
// Import the CSS
import '@bod.ee/bare/dist/bare.css';

// Import specific components
import { Page, PageWithSidebar } from '@bod.ee/bare/components';
```

## Library Structure

The library is organized into several layers, each building upon the previous one:

### 1. Atoms (Basic Layout)

The most fundamental building blocks for layout and spacing:

- `row`: Horizontal flex container with default spacing
- `col`: Vertical flex container with default spacing
- `grid`: Grid container with default settings
- `stack`: Vertical stack with consistent spacing
- `spacer`: Utility for adding consistent spacing between elements

### 2. Patterns (Layout Structures)

Predefined layout patterns that combine atoms:

- `layout`: Common page layouts including:
  - Centered content
  - Sidebar layouts
  - Grid-based layouts
  - Responsive layouts

### 3. Primitives (Styled Elements)

Basic UI elements with default styling:

- `button`: Button component with variants:
  - Primary
  - Secondary
  - Ghost
  - Sizes: sm, md, lg
- `input`: Form input with default styling
- `badge`: Badge component for labels and status indicators

### 4. Components (Complex UI Units)

Higher-level Vue components that combine multiple primitives:

- `Page`: Basic page layout with header, content, and footer sections
- `PageWithSidebar`: Extended page layout with a collapsible sidebar

## Utility Classes

The library provides a set of utility classes for common needs:

### Display Utilities

- `hidden`: Hide element
- `vanish`: Hide element and remove from layout
- `flex`: Set flex-grow to 1
- `flex-locked`: Set flex to 0 0 auto
- `x-flex`: Display flex with cross-browser support
- `overlay`: Full-screen overlay with semi-transparent background

### Text Utilities

- `lighter`: Font weight 100
- `light`: Font weight 200
- `normal`: Font weight normal
- `bold`: Font weight bold
- `bolder`: Font weight bolder
- `heavy`: Font weight 900

### Responsive Utilities

- `xs-hide`: Hide on extra small screens
- `sm-hide`: Hide on small screens
- `md-hide`: Hide on medium screens
- `lg-hide`: Hide on large screens
- `xs-show`: Show on extra small screens
- `sm-show`: Show on small screens
- `md-show`: Show on medium screens
- `lg-show`: Show on large screens

### Color Utilities

- `text-{50-950}`: Text colors from 50 to 950
- `bg-{50-950}`: Background colors from 50 to 950
- `text-dark`: Dark text color
- `bg-light`: Light background color
- `text-light`: Light text color
- `bg-dark`: Dark background color
- `accent-text`: Accent text color
- `accent-bg`: Accent background color

### Layout Utilities

- `center`: Center content both horizontally and vertically
- `between`: Space items evenly with space between
- `around`: Space items evenly with space around
- `evenly`: Space items evenly
- `full-x`: Full width
- `full-y`: Full height
- `full`: Full width and height

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
