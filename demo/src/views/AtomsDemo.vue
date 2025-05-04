<template lang="pug">
// Documentation Header
section.b-section
	h1.text-2xl.font-bold.mb-4 Layout Atoms Demo
	p.mb-4 This demo showcases the layout atoms available in the design system.

	// Table of Contents
	.b-toc.mb-8
		h2.text-xl.font-bold.mb-4 Table of Contents
		ol.b-stack.gap-2
			li
				a(class="text-blue-600 hover:text-blue-800" href="#basic-row") Basic Row Examples
			li
				a(class="text-blue-600 hover:text-blue-800" href="#row-alignments") Row Alignments
			li
				a(class="text-blue-600 hover:text-blue-800" href="#nested-structure") Nested Structure
			li
				a(class="text-blue-600 hover:text-blue-800" href="#responsive-layout") Responsive Layout
			li
				a(class="text-blue-600 hover:text-blue-800" href="#row-centering") Row Centering
			li
				a(class="text-blue-600 hover:text-blue-800" href="#start-alignments") Start Alignments
			li
				a(class="text-blue-600 hover:text-blue-800" href="#end-alignments") End Alignments
			li
				a(class="text-blue-600 hover:text-blue-800" href="#space-distribution") Space Distribution
			li
				a(class="text-blue-600 hover:text-blue-800" href="#grid-layout") Grid Layout
			li
				a(class="text-blue-600 hover:text-blue-800" href="#stack-layout") Stack Layout
			li
				a(class="text-blue-600 hover:text-blue-800" href="#spacer-examples") Spacer Examples
			li
				a(class="text-blue-600 hover:text-blue-800" href="#alignment-examples") Alignment Examples
			li
				a(class="text-blue-600 hover:text-blue-800" href="#responsive-examples") Responsive Examples

.b-stack.gap-8
	// Basic Row Example
	section#basic-row
		.b-section.overflow-x-auto
			.b-title Basic Row - default wrap
			.b-row.mb-4.bg-gray-200.p-4
				.b-block(class="w-[500px]") Item 1
				.b-block(class="w-[500px]") Item 2
				.b-block(class="w-[100px]") Item 3
				.b-block(class="w-[100px]") Item 4
				.b-block(class="w-[100px]") Item 5
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-row
		
		.b-section.overflow-x-auto
			.b-title Basic Row - wrap
			.b-row-wrap.mb-4.bg-gray-200.p-4
				.b-block(class="w-[500px]") Item 1
				.b-block(class="w-[500px]") Item 2
				.b-block(class="w-[100px]") Item 3
				.b-block(class="w-[100px]") Item 4
				.b-block(class="w-[100px]") Item 5
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-row-wrap

	// Row with Different Alignments
	section#row-alignments
		.b-section
			.b-title Row Alignments
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
	section#nested-structure
		.b-section
			.b-title Nested Structure
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
	section#responsive-layout
		.b-section
			.b-title Responsive Layout
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
	section#row-centering
		.b-section
			.b-title Row Centering
		
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
	section#start-alignments
		.b-section
			.b-title Start Alignments
		
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
	section#end-alignments
		.b-section
			.b-title End Alignments
		
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
	section#space-distribution
		.b-section
			.b-title Space Distribution
		
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
	section#grid-layout
		.b-section
			.b-title Grid Layout
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
	section#stack-layout
		.b-section
			.b-title Stack Layout
			.b-stack.gap-2.mb-4.bg-gray-200.p-4
				.b-block Item 1
				.b-block Item 2
				.b-block Item 3
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-stack-gap-4

			h2.text-xl.font-bold.mb-4 Stack Only on Larger Screens
			.b-gt-xs-stack.gap-2.mb-4.bg-gray-200.p-4
				.b-block Item 1 (stacks only on screens > 600px)
				.b-block Item 2 (stacks only on screens > 600px)
				.b-block Item 3 (stacks only on screens > 600px)
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-gt-xs-stack.gap-4

	// Spacer Example
	section#spacer-examples
		.b-section
			.b-title Spacer Examples
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
	section#alignment-examples
		.b-section
			.b-title Alignment Examples
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
	section#responsive-examples
		.b-section
			.b-title Responsive Examples
			.b-row.b-xs-col.mb-4.bg-gray-200.p-4
				.b-col(class="w-full md:w-1/2 lg:w-1/3").b-block
					p Content 1
				.b-col(class="w-full md:w-1/2 lg:w-1/3").b-block
					p Content 2
				.b-col(class="w-full md:w-1/2 lg:w-1/3").b-block
					p Content 3
			pre.mb-4.bg-gray-800.p-4.rounded.font-mono.text-sm.text-white .b-row.b-xs-col

	// Typography Examples
	section#typography-examples
		.b-section
			.b-title Typography Examples
			
			// Text Sizes
			.b-stack.gap-2.mb-8
				.b-title Text Sizes
				.b-text-xs This is extra small text
				.b-text-sm This is small text
				.b-text This is base text
				.b-text-lg This is large text
				.b-text-xl This is extra large text
			pre.b-text-sm.bg-gray-800.p-4.rounded.font-mono.text-white .b-text-xs, .b-text-sm, .b-text, .b-text-lg, .b-text-xl

		.b-section
			.b-title Semantic Text

			// Semantic Text
			.b-stack.gap-2.mb-8
				.b-heading This is a heading
				.b-title This is a title
				.b-subtitle This is a subtitle
				.b-caption This is a caption
				.b-label This is a label
			pre.b-text-sm.bg-gray-800.p-4.rounded.font-mono.text-white .b-heading, .b-title, .b-subtitle, .b-caption, .b-label

		.b-section
			.b-title Text Emphasis

			// Text Emphasis
			.b-stack.gap-2.mb-8
				.b-text This is normal text
				.b-text-emphasis This is emphasized text
				.b-text-strong This is strong text
				.b-text-muted This is muted text
			pre.b-text-sm.bg-gray-800.p-4.rounded.font-mono.text-white .b-text-emphasis, .b-text-strong, .b-text-muted

		.b-section
			.b-title Text Truncation

			// Text Truncation
			.b-stack.gap-2.mb-8
				.b-truncate(class="w-64") This is a very long text that will be truncated with an ellipsis at the end
				.b-text-clamp-2(class="w-64") This is a very long text that will be clamped to two lines with an ellipsis at the end. This is a very long text that will be clamped to two lines with an ellipsis at the end.
			pre.b-text-sm.bg-gray-800.p-4.rounded.font-mono.text-white .b-truncate, .b-text-clamp-2

		.b-section
			.b-title Block text utilization

			// Card Example
			.b-stack.gap-2.mb-8
				.bg-gray-300.p-4
					.b-block.w-48
						.b-caption Left Column
						.b-text Some content here

</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style lang="less" scoped>
/* Component-specific styles can be added here */
@import (reference) '../../../src/variables.less';

.b-section > .b-title {
	@apply mb-4;
}

.b-section {
	// background-color: @primary-bg;
}

pre { 
  @apply break-words whitespace-pre-wrap overflow-x-auto;
}

</style> 