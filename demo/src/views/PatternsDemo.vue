<template lang="pug">
// Documentation Header
section.mb-8
  h1.text-2xl.font-bold.mb-4 Layout Patterns Demo
  p.mb-4 This demo showcases the layout patterns available in the design system.

.b-stack.gap-8.xx-demo-sections
  // Centered Layout Example
  section
    .b-section
      h2.text-xl.font-bold.mb-4 Centered Layout
      .x-layout-centered.bg-gray-200.p-4.h-64
        .b-block Centered Content
      pre.xx-snippet .x-layout-centered

      h2.text-xl.font-bold.mb-4 Centered Layout with Width Constraints
      .bg-gray-200.p-4.h-64
        .b-block.x-layout-centered-narrow Narrow Content (max-w-md)
      pre.xx-snippet .x-layout-centered-narrow

      .bg-gray-200.p-4.h-64
        .b-block.x-layout-centered-medium Medium Content (max-w-lg)
      pre.xx-snippet .x-layout-centered-medium

      .bg-gray-200.p-4.h-64
        .b-block.x-layout-centered-wide Wide Content (max-w-4xl)
      pre.xx-snippet .x-layout-centered-wide

  // Fixed Navbar Layout Example
  section
    .b-section
      h2.text-xl.font-bold.mb-4 Fixed Navbar Layout
      .x-layout-navbar-fixed.bg-gray-200.min-h-96
        header.b-block.bg-gray-100 Fixed Header
        main.bg-gray-100.p-4 Main Content
        footer.bg-gray-300.p-4 Footer
      pre.xx-snippet .x-layout-navbar-fixed

  // Sidebar Layout Example
  section
    .b-section
      h2.text-xl.font-bold.mb-4 Sidebar Layout - Left
      .x-layout-sidebar-left.bg-gray-200.min-h-96
        aside.p-4
          h3.font-semibold.mb-2 Sidebar
          .b-stack.gap-2
            .b-block Item 1
            .b-block Item 2
            .b-block Item 3
        main.p-4.b-text-dark
          h3.font-semibold.mb-2 Main Content
          p.mb-4 This is the main content area. It should take up all remaining space and handle overflow properly.
          .grid.grid-cols-2.gap-4
            .b-block Content Block 1
            .b-block Content Block 2
            .b-block Content Block 3
            .b-block Content Block 4
      pre.xx-snippet .x-layout-sidebar-left

      h2.text-xl.font-bold.mb-4 Sidebar Layout - Right
      .x-layout-sidebar-right.bg-gray-200.h-96
        aside.p-4
          h3.font-semibold.mb-2 Sidebar
          .b-stack.gap-2
            .b-block Item 1
            .b-block Item 2
            .b-block Item 3
        main.p-4.b-text-dark
          h3.font-semibold.mb-2 Main Content
          p.mb-4 This is the main content area. It should take up all remaining space and handle overflow properly.
          .grid.grid-cols-2.gap-4
            .b-block Content Block 1
            .b-block Content Block 2
            .b-block Content Block 3
            .b-block Content Block 4
      pre.xx-snippet .x-layout-sidebar-right

  // Holy Grail Layout Example
  section
    .b-section
      h2.text-xl.font-bold.mb-4 Holy Grail Layout
      .x-layout-holy-grail.bg-gray-200.h-96
        header.bg-gray-300.p-4 
          h3.font-semibold Header
        nav.bg-gray-100.p-4
          h3.font-semibold.mb-2 Navigation
          .b-stack.gap-2
            .b-block Nav Item 1
            .b-block Nav Item 2
            .b-block Nav Item 3
        main.p-4
          h3.font-semibold.mb-2 Main Content
          .grid.grid-cols-2.gap-4
            .b-block Content Block 1
            .b-block Content Block 2
            .b-block Content Block 3
            .b-block Content Block 4
        aside.bg-gray-100.p-4
          h3.font-semibold.mb-2 Sidebar
          .b-stack.gap-2
            .b-block Side Item 1
            .b-block Side Item 2
        footer.bg-gray-300.p-4
          h3.font-semibold Footer
      pre.xx-snippet .x-layout-holy-grail

      h2.text-xl.font-bold.mb-4 Holy Grail Layout - No Sidebars
      .x-layout-holy-grail-no-sidebars.bg-gray-200.min-h-96
        header.bg-gray-300.p-4
          h3.font-semibold Header
        nav.bg-gray-100.p-4
          h3.font-semibold.mb-2 Navigation
          .b-stack.gap-2
            .b-block Nav Item 1
            .b-block Nav Item 2
            .b-block Nav Item 3
        main.p-4
          h3.font-semibold.mb-2 Main Content
          .grid.grid-cols-2.gap-4
            .b-block Content Block 1
            .b-block Content Block 2
            .b-block Content Block 3
            .b-block Content Block 4
        footer.bg-gray-300.p-4
          h3.font-semibold Footer
      pre.xx-snippet .x-layout-holy-grail-no-sidebars

  // Responsive Examples
  section
    .b-section
      h2.text-xl.font-bold.mb-4 Responsive Examples
      p.mb-4 Resize your browser window below 600px to see how these layouts adapt to smaller screens.
      .x-xs-layout-sidebar-left.x-layout-sidebar-left.bg-gray-200.h-96
        aside.p-4
          h3.font-semibold.mb-2 Sidebar (stacks on mobile)
          .b-stack.gap-2
            .b-block Item 1
            .b-block Item 2
            .b-block Item 3
        main.p-4.b-text-dark
          h3.font-semibold.mb-2 Main Content
          p.mb-4 This layout will stack vertically on screens smaller than 600px.
          .grid.grid-cols-2.gap-4(class="sm:grid-cols-1")
            .b-block Content Block 1
            .b-block Content Block 2
            .b-block Content Block 3
            .b-block Content Block 4
      pre.xx-snippet .x-xs-layout-sidebar-left
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style lang="less" scoped>
/* Component-specific styles can be added here */
@import (reference) '../../../src/variables.less';
@import (reference) '../../../src/index.less';
@import '../../../src/atoms/index.less';

.b-section {
  // background-color: @primary-bg;
}

.xx-demo-sections {
  h1, h2, h3, h4, h5, h6 {
    // @apply b-text-dark;
  }
}

.b-block { @apply bg-gray-300 p-4 rounded; }

.xx-snippet { @apply mb-4 bg-gray-800 p-4 rounded-br rounded-bl font-mono text-sm b-text-light border; }
</style> 