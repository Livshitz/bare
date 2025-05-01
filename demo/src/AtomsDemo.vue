<template lang="pug">
// Documentation Header
section.mb-8
	h1.text-2xl.font-bold.mb-4 Layout Atoms Demo
	p.mb-4 This demo showcases the layout atoms available in the design system.

.x-stack.gap-8
	// Basic Row Example
	section
		.b-section
			h2.text-xl.font-bold.mb-4 Basic Row - default wrap
			.b-row.mb-4.bg-gray-200.p-4
				.b-block(class="w-[500px]") Item 1
				.b-block(class="w-[500px]") Item 2
				.b-block(class="w-[100px]") Item 3
				.b-block(class="w-[100px]") Item 4
				.b-block(class="w-[100px]") Item 5
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-row
		
		.b-section
			h2.text-xl.font-bold.mb-4 Basic Row - no wrap
			.b-row-nowrap.mb-4.bg-gray-200.p-4
				.b-block(class="w-[500px]") Item 1
				.b-block(class="w-[500px]") Item 2
				.b-block(class="w-[100px]") Item 3
				.b-block(class="w-[100px]") Item 4
				.b-block(class="w-[100px]") Item 5
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-row-nowrap

	// Row with Different Alignments
	section
		.b-section
			h2.text-xl.font-bold.mb-4 Row Alignments
			.b-row.items-center.mb-4.bg-gray-200.p-4
				.b-block.h-20 Item 1
				.b-block.h-32 Item 2
				.b-block.h-16 Item 3
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-row.items-center

		.b-section
			.b-row.justify-between.mb-4.bg-gray-200.p-4
				.b-block Item 1
				.b-block Item 2
				.b-block Item 3
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-row.justify-between

	// Nested Rows and Columns
	section
		.b-section
			h2.text-xl.font-bold.mb-4 Nested Structure
			.b-row.mb-4.bg-gray-200.p-4
				.b-col.b-block
					.b-stack.gap-2
						h3.text-lg.font-semibold Left Column
						p Some content here
				.b-col.b-block
					.b-stack.gap-2
						h3.text-lg.font-semibold Right Column
						p More content here
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-col
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-stack.gap-2

	// Responsive Example
	section
		.b-section
			h2.text-xl.font-bold.mb-4 Responsive Layout
			.b-row.b-xs-col.mb-4.bg-gray-200.p-4
				.b-col(class="w-full md:w-1\/2 lg:w-1\/3").b-block
					p Content 1
				.b-col(class="w-full md:w-1\/2 lg:w-1\/3").b-block
					p Content 2
				.b-col(class="w-full md:w-1\/2 lg:w-1\/3").b-block
					p Content 3
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-row.b-xs-col
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .w-full.md:w-1/2.lg:w-1/3

	// Center Alignment Examples
	section.b-section
		h2.text-xl.font-bold.mb-4 Row Centering
		
		// Vertically Centered Row
		.b-row.b-center-y.h-32.bg-gray-200.p-4.mb-4
			.b-block.h-12 Item 1
			.b-block.h-16 Item 2
			.b-block.h-20 Item 3
		pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-center-y

		// Horizontally Centered Row
		.b-row.b-center-x.h-32.bg-gray-200.p-4.mb-4
			.b-block.h-12 Item 1
			.b-block.h-16 Item 2
			.b-block.h-20 Item 3
		pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-center-x

		// Fully Centered Row
		.b-row.b-center.h-32.bg-gray-200.p-4.mb-4
			.b-block.h-12 Item 1
			.b-block.h-16 Item 2
			.b-block.h-20 Item 3
		pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-center

		// Responsive Centering
		.b-row.b-xs-center-x.h-32.bg-gray-200.p-4.mb-4
			.b-block.h-12 Item 1
			.b-block.h-16 Item 2
			.b-block.h-20 Item 3
		pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-xs-center-x

	// Start Alignment Examples
	section.b-section
		h2.text-xl.font-bold.mb-4 Start Alignments
		
		// Vertically Start Aligned Row
		.b-row.b-start-y.h-32.bg-gray-200.p-4.mb-4
			.b-block.h-12 Item 1
			.b-block.h-16 Item 2
			.b-block.h-20 Item 3
		pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-start-y

		// Horizontally Start Aligned Row
		.b-row.b-start-x.h-32.bg-gray-200.p-4.mb-4
			.b-block.h-12 Item 1
			.b-block.h-16 Item 2
			.b-block.h-20 Item 3
		pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-start-x

		// Fully Start Aligned Row
		.b-row.b-start.h-32.bg-gray-200.p-4.mb-4
			.b-block.h-12 Item 1
			.b-block.h-16 Item 2
			.b-block.h-20 Item 3
		pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-start

	// End Alignment Examples
	section.b-section
		h2.text-xl.font-bold.mb-4 End Alignments
		
		// Vertically End Aligned Row
		.b-row.b-end-y.h-32.bg-gray-200.p-4.mb-4
			.b-block.h-12 Item 1
			.b-block.h-16 Item 2
			.b-block.h-20 Item 3
		pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-end-y

		// Horizontally End Aligned Row
		.b-row.b-end-x.h-32.bg-gray-200.p-4.mb-4
			.b-block.h-12 Item 1
			.b-block.h-16 Item 2
			.b-block.h-20 Item 3
		pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-end-x

		// Fully End Aligned Row
		.b-row.b-end.h-32.bg-gray-200.p-4.mb-4
			.b-block.h-12 Item 1
			.b-block.h-16 Item 2
			.b-block.h-20 Item 3
		pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-end

	// Space Distribution Examples
	section.b-section
		h2.text-xl.font-bold.mb-4 Space Distribution
		
		// Space Between
		.b-row.b-between.h-32.bg-gray-200.p-4.mb-4
			.b-block.h-12 Item 1
			.b-block.h-16 Item 2
			.b-block.h-20 Item 3
		pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-between

		// Space Around
		.b-row.b-around.h-32.bg-gray-200.p-4.mb-4
			.b-block.h-12 Item 1
			.b-block.h-16 Item 2
			.b-block.h-20 Item 3
		pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-around

		// Space Evenly
		.b-row.b-evenly.h-32.bg-gray-200.p-4.mb-4
			.b-block.h-12 Item 1
			.b-block.h-16 Item 2
			.b-block.h-20 Item 3
		pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-evenly

		// Horizontal Space Between
		.b-row.b-between-x.h-32.bg-gray-200.p-4.mb-4
			.b-block.h-12 Item 1
			.b-block.h-16 Item 2
			.b-block.h-20 Item 3
		pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-between-x

	// Grid Example
	section
		.b-section
			h2.text-xl.font-bold.mb-4 Grid Layout
			.b-grid.mb-4.bg-gray-200.p-4
				.b-block Item 1
				.b-block Item 2
				.b-block Item 3
				.b-block Item 4
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-grid

			h2.text-xl.font-bold.mb-4 Grid with Fixed Columns
			.b-grid-3.mb-4.bg-gray-200.p-4
				.b-block Item 1
				.b-block Item 2
				.b-block Item 3
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-grid-3

	// Stack Example
	section
		.b-section
			h2.text-xl.font-bold.mb-4 Stack Layout
			.b-stack-gap-4.mb-4.bg-gray-200.p-4
				.b-block Item 1
				.b-block Item 2
				.b-block Item 3
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-stack-gap-4

	// Spacer Example
	section
		.b-section
			h2.text-xl.font-bold.mb-4 Spacer Examples
			.b-row.mb-4.bg-gray-200.p-4
				.b-block Item 1
				.b-spacer
				.b-block Item 2
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-spacer

			.b-stack.mb-4.bg-gray-200.p-4
				.b-block Item 1
				.b-spacer-h-4
				.b-block Item 2
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-spacer-h-4

	// Alignment Examples
	section
		.b-section
			h2.text-xl.font-bold.mb-4 Alignment Examples
			.b-row.b-center.h-32.mb-4.bg-gray-200.p-4
				.b-block.h-12 Item 1
				.b-block.h-16 Item 2
				.b-block.h-20 Item 3
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-center

			.b-row.b-between.h-32.mb-4.bg-gray-200.p-4
				.b-block.h-12 Item 1
				.b-block.h-16 Item 2
				.b-block.h-20 Item 3
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-between

	// Responsive Examples
	section
		.b-section
			h2.text-xl.font-bold.mb-4 Responsive Examples
			.b-row.b-xs-col.mb-4.bg-gray-200.p-4
				.b-col(class="w-full md:w-1/2 lg:w-1/3").b-block
					p Content 1
				.b-col(class="w-full md:w-1/2 lg:w-1/3").b-block
					p Content 2
				.b-col(class="w-full md:w-1/2 lg:w-1/3").b-block
					p Content 3
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-row.b-xs-col

.test test
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style lang="less" scoped>
/* Component-specific styles can be added here */
@import (reference) '../../src/variables.less';

.b-section {
	// background-color: @primary-bg;
}

.b-block {
	@apply bg-gray-300 p-4 rounded;
}
</style> 