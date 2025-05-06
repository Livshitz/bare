<template lang="pug">
// Documentation Header
section.section.prose
	h1.t-text-2xl.t-font-bold.t-mb-4 Layout Patterns Demo
	p.t-mb-4 This demo showcases the composable layout patterns available in the design system.

.stack.t-gap-8.xx-demo-sections
	// Centered Layout Example
	section
		.section
			h2.t-text-xl.t-font-bold.t-mb-4 Centered Layout
			.layout.layout--centered.t-bg-gray-200.t-p-4.t-h-64
				.block Centered Content
			pre .layout.layout--centered

			h2.t-text-xl.t-font-bold.t-mb-4 Centered Layout with Width Constraints
			.narrow.t-bg-gray-200.t-p-4.t-h-64
				.block Narrow Content (max-w-7xl)
			pre .narrow

	// Fixed Header Layout Example
	section
		.section
			h2.t-text-xl.t-font-bold.t-mb-4 Fixed Header Layout
			.layout.layout--fixed-header.t-bg-gray-200.t-min-h-screen
				header.t-bg-gray-100.t-p-4.t-xs-hide.t-opacity-70.t-pointer-events-none
					.col.t-gap-1.text-dark.no-prose
						h3.t-font-semibold Fixed Header (4.5rem/72px height)
						p.t-text-sm This header stays fixed at the top
				main.layout-main.t-bg-gray-100.t-p-4.text-dark.t-border
					h3.t-font-semibold.t-mb-2 Main Content
					p.t-mb-4 This content area fills the remaining viewport height
					.grid.t-grid-cols-2.t-gap-4
						.block Content Block 1
						.block Content Block 2
						.block Content Block 3
						.block Content Block 4
				footer.layout-footer.t-bg-gray-300.t-p-4.text-dark
					h3.t-font-semibold Footer
					p.t-text-sm Optional footer that stays at the bottom
			pre .layout.layout--fixed-header

	// Sidebar Layout Example
	section
		.section
			h2.t-text-xl.t-font-bold.t-mb-4 Sidebar Layout - Left
			.layout.layout--sidebar-left.t-bg-gray-200.t-min-h-96.text-dark
				aside.layout-sidebar.t-p-4.t-bg-gray-400
					h3.t-font-semibold.t-mb-2 Sidebar
					.stack.t-gap-2
						.block Item 1
						.block Item 2
						.block Item 3
				main.layout-main.t-p-4.text-dark
					h3.t-font-semibold.t-mb-2 Main Content
					p.t-mb-4 This is the main content area. It should take up all remaining space and handle overflow properly.
					.grid.t-grid-cols-2.t-gap-4
						.block Content Block 1
						.block Content Block 2
						.block Content Block 3
						.block Content Block 4
			pre .layout.layout--sidebar-left

			h2.t-text-xl.t-font-bold.t-mb-4 Sidebar Layout - Right
			.layout.layout--sidebar-right.t-bg-gray-200.t-h-96.text-dark
				aside.layout-sidebar.t-p-4.t-bg-gray-400
					h3.t-font-semibold.t-mb-2 Sidebar
					.stack.t-gap-2
						.block Item 1
						.block Item 2
						.block Item 3
				main.layout-main.t-p-4.text-dark
					h3.t-font-semibold.t-mb-2 Main Content
					p.t-mb-4 This is the main content area. It should take up all remaining space and handle overflow properly.
					.grid.t-grid-cols-2.t-gap-4
						.block Content Block 1
						.block Content Block 2
						.block Content Block 3
						.block Content Block 4
			pre .layout.layout--sidebar-right

	// Fullscreen Layout Example
	section
		.section
			h2.t-text-xl.t-font-bold.t-mb-4 Fullscreen Layout
			.layout.layout--fullscreen.t-bg-gray-200.t-border.text-dark
				header.t-bg-gray-100.t-p-4.t-border
					h3.t-font-semibold Header
					p.t-text-sm This header takes its natural height
				main.layout-main.t-bg-gray-100.t-p-4
					h3.t-font-semibold.t-mb-2 Main Content
					p.t-mb-4 This content area fills all remaining space between header and footer
					.grid.t-grid-cols-2.t-gap-4
						.block Content Block 1
						.block Content Block 2
						.block Content Block 3
						.block Content Block 4
				footer.layout-footer.t-bg-gray-300.t-p-4
					h3.t-font-semibold Footer
					p.t-text-sm This footer takes its natural height
			pre .layout.layout--fullscreen

	// Responsive Examples
	section
		.section
			h2.t-text-xl.t-font-bold.t-mb-4 Responsive Examples
			p.t-mb-4 Resize your browser window below 600px to see how these layouts adapt to smaller screens.
			.layout.layout--sidebar-left.layout--stack.t-bg-gray-200.t-h-96.text-dark
				aside.layout-sidebar.t-p-4.t-bg-gray-400
					h3.t-font-semibold.t-mb-2 Sidebar (stacks on mobile)
					.stack.t-gap-2
						.block Item 1
						.block Item 2
						.block Item 3
				main.layout-main.t-p-4.text-dark
					h3.t-font-semibold.t-mb-2 Main Content
					p.t-mb-4 This layout will stack vertically on screens smaller than 600px.
					.grid.t-grid-cols-2.t-gap-4(class="sm:t-grid-cols-1")
						.block Content Block 1
						.block Content Block 2
						.block Content Block 3
						.block Content Block 4
			pre .layout.layout--sidebar-left.layout--stack
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style lang="less" scoped>
/* Component-specific styles can be added here */
@import (reference) '../../../src/variables.less';
@import (reference) '../../../src/index.less';
@import (reference) '../../../src/atoms/index.less';

.section {
	// background-color: @primary-bg;
}

.xx-demo-sections {

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		// @apply text-dark;
	}
}

.block {
	@apply t-bg-gray-300 t-p-4 t-rounded;
}
</style>
