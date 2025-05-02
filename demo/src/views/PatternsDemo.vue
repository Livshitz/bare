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
      .b-layout-centered.bg-gray-200.p-4.h-64
        .b-block Centered Content
      pre.xx-snippet .b-layout-centered

      h2.text-xl.font-bold.mb-4 Centered Layout with Width Constraints
      .bg-gray-200.p-4.h-64
        .b-block.b-narrow Narrow Content (max-w-7xl)
      pre.xx-snippet .b-layout-centered-narrow

      

  // Fixed Navbar Layout Example
  section
    .b-section
      h2.text-xl.font-bold.mb-4 Fixed Navbar Layout
      .b-layout-navbar-fixed.bg-gray-200.min-h-screen
        header.bg-gray-100.p-2.b-xs-hide.opacity-70.pointer-events-none
          .b-col.gap-1.b-text-dark
            h3.font-semibold Fixed Header (4rem/64px height)
            p.text-sm This header stays fixed at the top
        main.bg-gray-100.p-4.b-text-dark
          h3.font-semibold.mb-2 Main Content
          p.mb-4 This content area fills the remaining viewport height
          .grid.grid-cols-2.gap-4
            .b-block Content Block 1
            .b-block Content Block 2
            .b-block Content Block 3
            .b-block Content Block 4
        footer.bg-gray-300.p-4.b-text-dark
          h3.font-semibold Footer
          p.text-sm Optional footer that stays at the bottom
      pre.xx-snippet .b-layout-navbar-fixed

      h2.text-xl.font-bold.mb-4.mt-8 Mobile Fixed Navbar Layout
      .b-xs-layout-navbar-fixed.bg-gray-200.min-h-screen.b-text-dark
        header.bg-gray-100.p-2.opacity-70.pointer-events-none
          h3.font-semibold Fixed Header (3rem/48px height)
          p.text-sm Smaller header on mobile devices
        main.bg-gray-100.p-4
          h3.font-semibold.mb-2 Main Content
          p.mb-4 This layout adapts to mobile screens
          .grid.grid-cols-1.gap-4
            .b-block Content Block 1
            .b-block Content Block 2
            .b-block Content Block 3
        footer.bg-gray-300.p-4
          h3.font-semibold Footer
          p.text-sm Footer remains at the bottom
      pre.xx-snippet .b-xs-layout-navbar-fixed

  // Sidebar Layout Example
  section
    .b-section
      h2.text-xl.font-bold.mb-4 Sidebar Layout - Left
      .b-layout-sidebar-left.bg-gray-200.min-h-96
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
      pre.xx-snippet .b-layout-sidebar-left

      h2.text-xl.font-bold.mb-4 Sidebar Layout - Right
      .b-layout-sidebar-right.bg-gray-200.h-96
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
      pre.xx-snippet .b-layout-sidebar-right

  // Holy Grail Layout Example
  section
    .b-section.b-xs-hide
      h2.text-xl.font-bold.mb-4 Holy Grail Layout
      .b-layout-holy-grail.bg-gray-200.h-96.b-text-dark
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
      pre.xx-snippet .b-layout-holy-grail

      h2.text-xl.font-bold.mb-4 Holy Grail Layout - No Sidebars
      .b-layout-holy-grail-no-sidebars.bg-gray-200.min-h-96.b-text-dark
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
      pre.xx-snippet .b-layout-holy-grail-no-sidebars

  // Responsive Examples
  section
    .b-section
      h2.text-xl.font-bold.mb-4 Responsive Examples
      p.mb-4 Resize your browser window below 600px to see how these layouts adapt to smaller screens.
      .b-xs-layout-sidebar-left.b-layout-sidebar-left.bg-gray-200.h-96
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
      pre.xx-snippet .b-xs-layout-sidebar-left

  // Fullscreen Layout Example
  section
    .b-section
      h2.text-xl.font-bold.mb-4 Fullscreen Layout
      .b-layout-fullscreen.bg-gray-200.min-h-screen.border.b-text-dark
        header.bg-gray-100.p-4.border
          h3.font-semibold Header
          p.text-sm This header takes its natural height
        main.bg-gray-100.p-4
          h3.font-semibold.mb-2 Main Content
          p.mb-4 This content area fills all remaining space between header and footer
          .grid.grid-cols-2.gap-4
            .b-block Content Block 1
            .b-block Content Block 2
            .b-block Content Block 3
            .b-block Content Block 4
        footer.bg-gray-300.p-4
          h3.font-semibold Footer
          p.text-sm This footer takes its natural height
      pre.xx-snippet .b-layout-fullscreen

      h2.text-xl.font-bold.mb-4.mt-8 Mobile Fullscreen Layout
      .b-xs-layout-fullscreen.bg-gray-200.min-h-screen.b-text-dark
        header.bg-gray-100.p-4
          h3.font-semibold Header
          p.text-sm Same layout structure on mobile
        main.bg-gray-100.p-4
          h3.font-semibold.mb-2 Main Content
          p.mb-4 Content area adapts to mobile screens
          .grid.grid-cols-1.gap-4
            .b-block Content Block 1
            .b-block Content Block 2
            .b-block Content Block 3
        footer.bg-gray-300.p-4
          h3.font-semibold Footer
          p.text-sm Footer remains at the bottom
      pre.xx-snippet .b-xs-layout-fullscreen
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
