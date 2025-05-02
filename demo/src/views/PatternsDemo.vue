<template lang="pug">
// Documentation Header
section.mb-8
  h1.text-2xl.font-bold.mb-4 Layout Patterns Demo
  p.mb-4 This demo showcases the composable layout patterns available in the design system.

.b-stack.gap-8.xx-demo-sections
  // Centered Layout Example
  section
    .b-section
      h2.text-xl.font-bold.mb-4 Centered Layout
      .b-layout.b-layout--centered.bg-gray-200.p-4.h-64
        .b-block Centered Content
      pre.xx-snippet .b-layout.b-layout--centered

      h2.text-xl.font-bold.mb-4 Centered Layout with Width Constraints
      .b-narrow.bg-gray-200.p-4.h-64
        .b-block Narrow Content (max-w-7xl)
      pre.xx-snippet .b-narrow

  // Fixed Header Layout Example
  section
    .b-section
      h2.text-xl.font-bold.mb-4 Fixed Header Layout
      .b-layout.b-layout--fixed-header.bg-gray-200.min-h-screen
        header.b-layout-header.bg-gray-100.p-2.b-xs-hide.opacity-70.pointer-events-none
          .b-col.gap-1.b-text-dark
            h3.font-semibold Fixed Header (4rem/64px height)
            p.text-sm This header stays fixed at the top
        main.b-layout-main.bg-gray-100.p-4.b-text-dark
          h3.font-semibold.mb-2 Main Content
          p.mb-4 This content area fills the remaining viewport height
          .grid.grid-cols-2.gap-4
            .b-block Content Block 1
            .b-block Content Block 2
            .b-block Content Block 3
            .b-block Content Block 4
        footer.b-layout-footer.bg-gray-300.p-4.b-text-dark
          h3.font-semibold Footer
          p.text-sm Optional footer that stays at the bottom
      pre.xx-snippet .b-layout.b-layout--fixed-header

  // Sidebar Layout Example
  section
    .b-section
      h2.text-xl.font-bold.mb-4 Sidebar Layout - Left
      .b-layout.b-layout--sidebar-left.bg-gray-200.min-h-96.b-text-dark
        aside.b-layout-sidebar.p-4.bg-gray-300
          h3.font-semibold.mb-2 Sidebar
          .b-stack.gap-2
            .b-block Item 1
            .b-block Item 2
            .b-block Item 3
        main.b-layout-main.p-4.b-text-dark
          h3.font-semibold.mb-2 Main Content
          p.mb-4 This is the main content area. It should take up all remaining space and handle overflow properly.
          .grid.grid-cols-2.gap-4
            .b-block Content Block 1
            .b-block Content Block 2
            .b-block Content Block 3
            .b-block Content Block 4
      pre.xx-snippet .b-layout.b-layout--sidebar-left

      h2.text-xl.font-bold.mb-4 Sidebar Layout - Right
      .b-layout.b-layout--sidebar-right.bg-gray-200.h-96.b-text-dark
        aside.b-layout-sidebar.p-4.bg-gray-300
          h3.font-semibold.mb-2 Sidebar
          .b-stack.gap-2
            .b-block Item 1
            .b-block Item 2
            .b-block Item 3
        main.b-layout-main.p-4.b-text-dark
          h3.font-semibold.mb-2 Main Content
          p.mb-4 This is the main content area. It should take up all remaining space and handle overflow properly.
          .grid.grid-cols-2.gap-4
            .b-block Content Block 1
            .b-block Content Block 2
            .b-block Content Block 3
            .b-block Content Block 4
      pre.xx-snippet .b-layout.b-layout--sidebar-right

  // Fullscreen Layout Example
  section
    .b-section
      h2.text-xl.font-bold.mb-4 Fullscreen Layout
      .b-layout.b-layout--fullscreen.bg-gray-200.border.b-text-dark
        header.b-layout-header.bg-gray-100.p-4.border
          h3.font-semibold Header
          p.text-sm This header takes its natural height
        main.b-layout-main.bg-gray-100.p-4
          h3.font-semibold.mb-2 Main Content
          p.mb-4 This content area fills all remaining space between header and footer
          .grid.grid-cols-2.gap-4
            .b-block Content Block 1
            .b-block Content Block 2
            .b-block Content Block 3
            .b-block Content Block 4
        footer.b-layout-footer.bg-gray-300.p-4
          h3.font-semibold Footer
          p.text-sm This footer takes its natural height
      pre.xx-snippet .b-layout.b-layout--fullscreen

  // Responsive Examples
  section
    .b-section
      h2.text-xl.font-bold.mb-4 Responsive Examples
      p.mb-4 Resize your browser window below 600px to see how these layouts adapt to smaller screens.
      .b-layout.b-layout--sidebar-left.b-layout--stack.bg-gray-200.h-96.b-text-dark
        aside.b-layout-sidebar.p-4.bg-gray-300
          h3.font-semibold.mb-2 Sidebar (stacks on mobile)
          .b-stack.gap-2
            .b-block Item 1
            .b-block Item 2
            .b-block Item 3
        main.b-layout-main.p-4.b-text-dark
          h3.font-semibold.mb-2 Main Content
          p.mb-4 This layout will stack vertically on screens smaller than 600px.
          .grid.grid-cols-2.gap-4(class="sm:grid-cols-1")
            .b-block Content Block 1
            .b-block Content Block 2
            .b-block Content Block 3
            .b-block Content Block 4
      pre.xx-snippet .b-layout.b-layout--sidebar-left.b-layout--stack
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style lang="less" scoped>
/* Component-specific styles can be added here */
@import (reference) '../../../src/variables.less';
@import (reference) '../../../src/index.less';
@import (reference) '../../../src/atoms/index.less';

.b-section {
  // background-color: @primary-bg;
}

.xx-demo-sections {
  h1, h2, h3, h4, h5, h6 {
    // @apply b-text-dark;
  }
}

.b-block { @apply bg-gray-300 p-4 rounded; }
.xx-snippet { @apply mb-4 bg-gray-800 p-4 rounded-br rounded-bl font-mono text-sm border; .b-text-light }
</style> 
