<template lang="pug">
// Documentation Header
section.section
	h1.t-text-2xl.t-font-bold.t-mb-4 Layout Atoms Demo
	p.t-mb-4 This demo showcases the layout atoms available in the design system.

	// Table of Contents
	.toc.t-mb-8
		h2.t-text-xl.t-font-bold.t-mb-4 Table of Contents
		ol.stack.t-gap-2
			li
				a(class="t-text-blue-600 hover:t-text-blue-800" href="#basic-row") Basic Row Examples
			li
				a(class="t-text-blue-600 hover:t-text-blue-800" href="#row-alignments") Row Alignments
			li
				a(class="t-text-blue-600 hover:t-text-blue-800" href="#nested-structure") Nested Structure
			li
				a(class="t-text-blue-600 hover:t-text-blue-800" href="#responsive-layout") Responsive Layout
			li
				a(class="t-text-blue-600 hover:t-text-blue-800" href="#row-centering") Row Centering
			li
				a(class="t-text-blue-600 hover:t-text-blue-800" href="#start-alignments") Start Alignments
			li
				a(class="t-text-blue-600 hover:t-text-blue-800" href="#end-alignments") End Alignments
			li
				a(class="t-text-blue-600 hover:t-text-blue-800" href="#space-distribution") Space Distribution
			li
				a(class="t-text-blue-600 hover:t-text-blue-800" href="#grid-layout") Grid Layout
			li
				a(class="t-text-blue-600 hover:t-text-blue-800" href="#stack-layout") Stack Layout
			li
				a(class="t-text-blue-600 hover:t-text-blue-800" href="#spacer-examples") Spacer Examples
			li
				a(class="t-text-blue-600 hover:t-text-blue-800" href="#alignment-examples") Alignment Examples
			li
				a(class="t-text-blue-600 hover:t-text-blue-800" href="#responsive-examples") Responsive Examples

.stack.t-gap-8
	// Basic Row Example
	section#basic-row
		.section.t-overflow-x-auto
			.title Basic Row - default wrap
			.row.t-mb-4.t-bg-gray-200.t-p-4
				.block(class="t-w-[500px]") Item 1
				.block(class="t-w-[500px]") Item 2
				.block(class="t-w-[100px]") Item 3
				.block(class="t-w-[100px]") Item 4
				.block(class="t-w-[100px]") Item 5
			pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .row
		
		.section.t-overflow-x-auto
			.title Basic Row - wrap
			.row-wrap.t-mb-4.t-bg-gray-200.t-p-4
				.block(class="t-w-[500px]") Item 1
				.block(class="t-w-[500px]") Item 2
				.block(class="t-w-[100px]") Item 3
				.block(class="t-w-[100px]") Item 4
				.block(class="t-w-[100px]") Item 5
			pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .row-wrap

	// Row with Different Alignments
	section#row-alignments
		.section
			.title Row Alignments
			.row.t-items-center.t-mb-4.t-bg-gray-200.t-p-4
				.block.t-h-20 Item 1
				.block.t-h-32 Item 2
				.block.t-h-16 Item 3
			pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .row.items-center

		.section
			.row.t-justify-between.t-mb-4.t-bg-gray-200.t-p-4
				.block Item 1
				.block Item 2
				.block Item 3
			pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .row.justify-between

	// Nested Rows and Columns
	section#nested-structure
		.section
			.title Nested Structure
			.row.t-mb-4.t-bg-gray-200.t-p-4
				.col.block
					.stack.t-gap-2
						h3.t-text-lg.t-font-semibold Left Column
						p Some content here
				.col.block
					.stack.t-gap-2
						h3.t-text-lg.t-font-semibold Right Column
						p More content here
			pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .col
			pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .stack.gap-2

	// Responsive Example
	section#responsive-layout
		.section
			.title Responsive Layout
			.row.xs-col.t-mb-4.t-bg-gray-200.t-p-4
				.col(class="t-w-full md:t-w-1/2 lg:t-w-1/3").block
					p Content 1
				.col(class="t-w-full md:t-w-1/2 lg:t-w-1/3").block
					p Content 2
				.col(class="t-w-full md:t-w-1/2 lg:t-w-1/3").block
					p Content 3
			pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .row.xs-col
			pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .w-full.md:w-1/2.lg:w-1/3

	// Center Alignment Examples
	section.section#row-centering
		.title Row Centering
		
		// Vertically Centered Row
		.row.center-y.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .center-y

		// Horizontally Centered Row
		.row.center-x.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .center-x

		// Fully Centered Row
		.row.center.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .center

		// Responsive Centering
		.row.xs-center-x.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .xs-center-x

	// Start Alignment Examples
	section#start-alignments.section
		.title Start Alignments
		
		// Vertically Start Aligned Row
		.row.start-y.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .start-y

		// Horizontally Start Aligned Row
		.row.start-x.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .start-x

		// Fully Start Aligned Row
		.row.start.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .start

	// End Alignment Examples
	section#end-alignments.section
		.title End Alignments
		
		// Vertically End Aligned Row
		.row.end-y.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .end-y

		// Horizontally End Aligned Row
		.row.end-x.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .end-x

		// Fully End Aligned Row
		.row.end.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .end

	// Space Distribution Examples
	section#space-distribution.section
		.title Space Distribution
		
		// Space Between
		.row.between.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .between

		// Space Around
		.row.around.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .around

		// Space Evenly
		.row.evenly.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .evenly

		// Horizontal Space Between
		.row.between-x.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .between-x

	// Grid Example
	section#grid-layout.section
		.title Grid Layout
		.grid.t-mb-4.t-bg-gray-200.t-p-4
			.block Item 1
			.block Item 2
			.block Item 3
			.block Item 4
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .grid

		h2.t-text-xl.t-font-bold.t-mb-4 Grid with Fixed Columns
		.grid-3.t-mb-4.t-bg-gray-200.t-p-4
			.block Item 1
			.block Item 2
			.block Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .grid-3

	// Stack Example
	section#stack-layout.section
		.title Stack Layout
		.stack.t-gap-2.t-mb-4.t-bg-gray-200.t-p-4
			.block Item 1
			.block Item 2
			.block Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .stack-gap-4

		h2.t-text-xl.t-font-bold.t-mb-4 Stack Only on Larger Screens
		.gt-xs-stack.t-gap-2.t-mb-4.t-bg-gray-200.t-p-4
			.block Item 1 (stacks only on screens > 600px)
			.block Item 2 (stacks only on screens > 600px)
			.block Item 3 (stacks only on screens > 600px)
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .gt-xs-stack.gap-4

	// Spacer Example
	section#spacer-examples.section
		.title Spacer Examples
		.row.t-mb-4.t-bg-gray-200.t-p-4
			.block Item 1
			.spacer
			.block Item 2
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .spacer

		.stack.t-mb-4.t-bg-gray-200.t-p-4
			.block Item 1
			.spacer-h-4
			.block Item 2
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .spacer-h-4

	// Alignment Examples
	section#alignment-examples.section
		.title Alignment Examples
		.row.center.t-h-32.t-mb-4.t-bg-gray-200.t-p-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .center

		.row.between.t-h-32.t-mb-4.t-bg-gray-200.t-p-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .between

	// Responsive Examples
	section#responsive-examples.section
		.title Responsive Examples
		.row.xs-col.t-mb-4.t-bg-gray-200.t-p-4
			.col(class="t-w-full md:t-w-1/2 lg:t-w-1/3").block
				p Content 1
			.col(class="t-w-full md:t-w-1/2 lg:t-w-1/3").block
				p Content 2
			.col(class="t-w-full md:t-w-1/2 lg:t-w-1/3").block
				p Content 3
		pre.t-mb-4.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-sm.t-text-white .row.xs-col

	// Typography Examples
	section#typography-examples
		.section
			.title Typography Examples
			
			// Text Sizes
			.stack.t-gap-2.t-mb-8
				.title Text Sizes
				.text-xs This is extra small text
				.text-sm This is small text
				.text This is base text
				.text-lg This is large text
				.text-xl This is extra large text
			pre.t-text-sm.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-white .text-xs, .text-sm, .text, .text-lg, .text-xl

		.section
			.title Semantic Text

			// Semantic Text
			.stack.t-gap-2.t-mb-8
				.heading This is a heading
				.title This is a title
				.subtitle This is a subtitle
				.caption This is a caption
				.label This is a label
				.text This text
			pre.t-text-sm.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-white .heading, .title, .subtitle, .caption, .label

		.section
			.title Text Emphasis

			// Text Emphasis
			.stack.t-gap-2.t-mb-8
				.text This is normal text
				.text-emphasis This is emphasized text
				.text-strong This is strong text
				.text-muted This is muted text
			pre.t-text-sm.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-white .text-emphasis, .text-strong, .text-muted

		.section
			.title Text Truncation

			// Text Truncation
			.stack.t-gap-2.t-mb-8
				.truncate(class="t-w-64") This is a very long text that will be truncated with an ellipsis at the end
				.text-clamp-2(class="t-w-64") This is a very long text that will be clamped to two lines with an ellipsis at the end. This is a very long text that will be clamped to two lines with an ellipsis at the end.
			pre.t-text-sm.t-bg-gray-800.t-p-4.t-rounded.t-font-mono.t-text-white .truncate, .text-clamp-2

		.section
			.title Block text utilization

			// Card Example
			.stack.t-gap-2.t-mb-8
				.t-bg-gray-300.t-p-4
					.block.t-w-48
						.caption Left Column
						.text Some content here

</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style lang="less" scoped>
/* Component-specific styles can be added here */
@import (reference) '../../../src/variables.less';

.section > .title {
	@apply t-mb-4;
}

.section {
	// background-color: @primary-bg;
}

pre { 
  @apply t-break-words t-whitespace-pre-wrap t-overflow-x-auto;
}

</style> 