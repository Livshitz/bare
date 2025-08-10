# @livz/bare

@livz/bare is a minimalist, semantic CSS library designed specifically for LLM-friendly UI generation. It provides a set of basic, expressive styles that focus primarily on layouts and structure, with additional utility classes for common needs.

The library aims to be:

- **Simple**: Easy to understand and implement
- **Semantic**: Class names clearly indicate their purpose
- **Expressive**: Provides enough styling options without overwhelming complexity
- **LLM-optimized**: Designed to be easily understood by language models for automated UI generation

## Installation

```bash
npm install @livz/bare
# or
yarn add @livz/bare
# or
bun add @livz/bare
```

## Usage

### CSS Usage

Import the CSS file into your project:

```css
/* In your main CSS/Less/Sass file */
@import '@livz/bare/dist/bare.css';
```

Or via a link tag in your HTML:

```html
<link rel="stylesheet" href="path/to/node_modules/@livz/bare/dist/bare.css" />
```

Or via CDN (unpkg):

```html
<link rel="stylesheet" href="https://unpkg.com/@livz/bare@latest/dist/bare.css" />
```

### Vue Component Usage

If you're using Vue, you can import components:

```javascript
// Import the CSS
import '@livz/bare/dist/bare.css';

// Import specific components
import { Page, PageWithSidebar } from '@livz/bare/components';
```

## Library Structure

The library is organized into several layers, each building upon the previous one:

### 1. Atoms (Basic Layout)

The most fundamental building blocks for layout and spacing:

- `.row`: Horizontal flex container with default spacing
- `.row-nowrap`: Flex row without wrapping
- `.row-xs`: Row layout for extra small screens
- `.row-xs-nowrap`: Non-wrapping row for extra small screens
- `.col`: Vertical flex container with default spacing
- `.col-xs`: Column layout for extra small screens
- `.center`: Center both horizontally and vertically
- `.center-x`: Center horizontally
- `.center-y`: Center vertically
- `.start`: Align to start both horizontally and vertically
- `.start-x`: Align to start horizontally
- `.start-y`: Align to start vertically
- `.end`: Align to end both horizontally and vertically
- `.end-x`: Align to end horizontally
- `.end-y`: Align to end vertically
- `.between`: Space between with center alignment
- `.between-x`: Space between horizontally
- `.around`: Space around with center alignment
- `.around-x`: Space around horizontally
- `.evenly`: Space evenly with center alignment
- `.evenly-x`: Space evenly horizontally
- Responsive variants: `.xs-center`, `.xs-center-x`, `.xs-center-y`, `.xs-start`, `.xs-start-x`, `.xs-start-y`, `.xs-end`, `.xs-end-x`, `.xs-end-y`, `.xs-between`, `.xs-between-x`, `.xs-around`, `.xs-around-x`, `.xs-evenly`, `.xs-evenly-x`

### 2. Patterns (Layout Structures)

Predefined layout patterns that combine atoms:

- `.layout`: Common page layouts including:
  - Centered content
  - Sidebar layouts
  - Grid-based layouts
  - Responsive layouts
- `.layout-header`: Page header with specific height
- `.layout-main`: Main content area
- `.layout-footer`: Footer area
- `.layout-sidebar`: Sidebar navigation
- `.layout-nav`: Navigation bar
- Layout modifiers:
  - `.layout--centered`: Center content
  - `.layout--fullscreen`: Full viewport height
  - `.layout--fixed-header`: Fixed header with adjusted main content
  - `.layout--sidebar-left`: Sidebar on the left
  - `.layout--sidebar-right`: Sidebar on the right
  - `.layout--stack`: Stack layout on small screens
  - `.layout--hide-sidebar`: Hide sidebar on small screens
  - `.narrow`: Centered container with max width

### 3. Primitives (Styled Elements)

Basic UI elements with default styling:

- `.block`: Content block with padding, rounded corners, and stack layout
- `.section`: Section element with larger spacing and container-like styling
- `.toc`: Table of contents with list styling
- `.button`: Button element (see utility classes for variants)
- `.input`: Form input
- `.badge`: Badge indicator

### 4. Components (Complex UI Units)

Higher-level Vue components that combine multiple primitives:

- `Page`: Basic page layout with header, content, and footer sections
- `PageWithSidebar`: Extended page layout with a collapsible sidebar

### 4. Utility Classes (Quick Reference)

| Class         | Purpose                                 |
|-------------- |-----------------------------------------|
| `hidden`      | Hide element                            |
| `vanish`      | Hide and remove from layout             |
| `flex`        | Set flex-grow to 1                      |
| `flex-locked` | Set flex to 0 0 auto                    |
| `x-flex`      | Display flex (cross-browser)            |
| `overlay`     | Full-screen overlay                     |
| `lighter`     | Font weight 100                         |
| `light`       | Font weight 200                         |
| `normal`      | Font weight normal                      |
| `bold`        | Font weight bold                        |
| `bolder`      | Font weight bolder                      |
| `heavy`       | Font weight 900                         |
| `xs-hide`     | Hide on extra small screens             |
| `sm-hide`     | Hide on small screens                   |
| `md-hide`     | Hide on medium screens                  |
| `lg-hide`     | Hide on large screens                   |
| `xs-show`     | Show on extra small screens             |
| `sm-show`     | Show on small screens                   |
| `md-show`     | Show on medium screens                  |
| `lg-show`     | Show on large screens                   |
| `text-{50-950}` | Text colors from 50 to 950            |
| `bg-{50-950}`   | Background colors from 50 to 950      |
| `text-dark`     | Dark text color                       |
| `bg-light`      | Light background                      |
| `text-light`    | Light text color                      |
| `bg-dark`       | Dark background                       |
| `text-accent`   | Accent text color                     |
| `bg-accent`     | Accent background                     |
| `center`        | Center content both axes              |
| `between`       | Space items evenly with space between |
| `around`        | Space items evenly with space around  |
| `evenly`        | Space items evenly                    |
| `full-x`        | Full width                            |
| `full-y`        | Full height                           |
| `full`          | Full width and height                 |

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
          <p>This is a sample page using @livz/bare components and styles.</p>
        </div>
      </div>
    </template>
  </Page>
</template>

<script setup lang="ts">
import { Page } from '@livz/bare/components';
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
          <p>This is a sample page with sidebar using @livz/bare components.</p>
        </div>
      </div>
    </template>
  </PageWithSidebar>
</template>

<script setup lang="ts">
import { PageWithSidebar } from '@livz/bare/components';
</script>
```
