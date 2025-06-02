<template lang="pug">
// Documentation Header
section.section.prose
	h1.t-text-2xl.t-font-bold.t-mb-4 Layout Atoms Demo
	p.t-mb-4 This demo showcases the layout atoms available in the design system.

	// Table of Contents
	.toc.t-mb-8
		h2.t-text-xl.t-font-bold.t-mb-4 Table of Contents
		ol.stack.t-gap-2
			li
				a(href="#basic-row") Basic Row Examples
			li
				a(href="#row-alignments") Row Alignments
			li
				a(href="#nested-structure") Nested Structure
			li
				a(href="#responsive-layout") Responsive Layout
			li
				a(href="#row-centering") Row Centering
			li
				a(href="#start-alignments") Start Alignments
			li
				a(href="#end-alignments") End Alignments
			li
				a(href="#space-distribution") Space Distribution
			li
				a(href="#grid-layout") Grid Layout
			li
				a(href="#stack-layout") Stack Layout
			li
				a(href="#spacer-examples") Spacer Examples
			li
				a(href="#alignment-examples") Alignment Examples
			li
				a(href="#responsive-examples") Responsive Examples

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
			pre .row
		
		.section.t-overflow-x-auto
			.title Basic Row - wrap
			.row-wrap.t-mb-4.t-bg-gray-200.t-p-4
				.block(class="t-w-[500px]") Item 1
				.block(class="t-w-[500px]") Item 2
				.block(class="t-w-[100px]") Item 3
				.block(class="t-w-[100px]") Item 4
				.block(class="t-w-[100px]") Item 5
			pre .row-wrap

	// Row with Different Alignments
	section#row-alignments
		.section
			.title Row Alignments
			.row.t-items-center.t-mb-4.t-bg-gray-200.t-p-4
				.block.t-h-20 Item 1
				.block.t-h-32 Item 2
				.block.t-h-16 Item 3
			pre .row.items-center

		.section
			.row.t-justify-between.t-mb-4.t-bg-gray-200.t-p-4
				.block Item 1
				.block Item 2
				.block Item 3
			pre .row.justify-between

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
			pre .col
			pre .stack.gap-2

	// Responsive Example
	section#responsive-layout
		.section
			.title Responsive Layout
			.row.col-xs.t-mb-4.t-bg-gray-200.t-p-4
				.col(class="t-w-full md:t-w-1/2 lg:t-w-1/3").block
					p Content 1
				.col(class="t-w-full md:t-w-1/2 lg:t-w-1/3").block
					p Content 2
				.col(class="t-w-full md:t-w-1/2 lg:t-w-1/3").block
					p Content 3
			pre .row.col-xs
			pre .w-full.md:w-1/2.lg:w-1/3

	// Center Alignment Examples
	section.section#row-centering
		.title Row Centering
		
		// Vertically Centered Row
		.row.center-y.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre .center-y

		// Horizontally Centered Row
		.row.center-x.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre .center-x

		// Fully Centered Row
		.row.center.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre .center

		// Responsive Centering
		.row.xs-center-x.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre .xs-center-x

	// Start Alignment Examples
	section#start-alignments.section
		.title Start Alignments
		
		// Vertically Start Aligned Row
		.row.start-y.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre .start-y

		// Horizontally Start Aligned Row
		.row.start-x.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre .start-x

		// Fully Start Aligned Row
		.row.start.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre .start

	// End Alignment Examples
	section#end-alignments.section
		.title End Alignments
		
		// Vertically End Aligned Row
		.row.end-y.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre .end-y

		// Horizontally End Aligned Row
		.row.end-x.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre .end-x

		// Fully End Aligned Row
		.row.end.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre .end

	// Space Distribution Examples
	section#space-distribution.section
		.title Space Distribution
		
		// Space Between
		.row.between.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre .between

		// Space Around
		.row.around.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre .around

		// Space Evenly
		.row.evenly.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre .evenly

		// Horizontal Space Between
		.row.between-x.t-h-32.t-bg-gray-200.t-p-4.t-mb-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre .between-x

	// Grid Example
	section#grid-layout.section
		.title Grid Layout
		.grid.t-mb-4.t-bg-gray-200.t-p-4
			.block Item 1
			.block Item 2
			.block Item 3
			.block Item 4
		pre .grid

		h2.t-text-xl.t-font-bold.t-mb-4 Grid with Fixed Columns
		.grid-3.t-mb-4.t-bg-gray-200.t-p-4
			.block Item 1
			.block Item 2
			.block Item 3
		pre .grid-3

	// Stack Example
	section#stack-layout.section
		.title Stack Layout
		.stack.t-gap-2.t-mb-4.t-bg-gray-200.t-p-4
			.block Item 1
			.block Item 2
			.block Item 3
		pre .stack

		h2.t-text-xl.t-font-bold.t-mb-4 Stack Only on Larger Screens
		.gt-xs-stack.t-gap-2.t-mb-4.t-bg-gray-200.t-p-4
			.block Item 1 (stacks only on screens > 600px)
			.block Item 2 (stacks only on screens > 600px)
			.block Item 3 (stacks only on screens > 600px)
		pre .gt-xs-stack.gap-4

	// Spacer Example
	section#spacer-examples.section
		.title Spacer Examples
		.row.t-mb-4.t-bg-gray-200.t-p-4
			.block Item 1
			.spacer
			.block Item 2
		pre .spacer

		.stack.t-mb-4.t-bg-gray-200.t-p-4
			.block Item 1
			.spacer-h-4
			.block Item 2
		pre .spacer-h-4

	// Alignment Examples
	section#alignment-examples.section
		.title Alignment Examples
		.row.center.t-h-32.t-mb-4.t-bg-gray-200.t-p-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre .center

		.row.between.t-h-32.t-mb-4.t-bg-gray-200.t-p-4
			.block.t-h-12 Item 1
			.block.t-h-16 Item 2
			.block.t-h-20 Item 3
		pre .between

	// Responsive Examples
	section#responsive-examples.section
		.title Responsive Examples
		.row.col-xs.t-mb-4.t-bg-gray-200.t-p-4
			.col(class="t-w-full md:t-w-1/2 lg:t-w-1/3").block
				p Content 1
			.col(class="t-w-full md:t-w-1/2 lg:t-w-1/3").block
				p Content 2
			.col(class="t-w-full md:t-w-1/2 lg:t-w-1/3").block
				p Content 3
		pre .row.col-xs

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
			pre .text-xs, .text-sm, .text, .text-lg, .text-xl

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
			pre .heading, .title, .subtitle, .caption, .label

		.section
			.title Text Emphasis

			// Text Emphasis
			.stack.t-gap-2.t-mb-8
				.text This is normal text
				.text-emphasis This is emphasized text
				.text-strong This is strong text
				.text-muted This is muted text
			pre .text-emphasis, .text-strong, .text-muted

		.section
			.title Text Truncation

			// Text Truncation
			.stack.t-gap-2.t-mb-8
				.truncate(class="t-w-64") This is a very long text that will be truncated with an ellipsis at the end
				.text-clamp-2(class="t-w-64") This is a very long text that will be clamped to two lines with an ellipsis at the end. This is a very long text that will be clamped to two lines with an ellipsis at the end.
			pre .truncate, .text-clamp-2

		.section
			.title Block text utilization

			// Card Example
			.stack.t-gap-2.t-mb-8
				.t-bg-gray-300.t-p-4
					.block.t-w-48
						.caption Left Column
						.text Some content here
			
			pre.
				.block
					.caption Left Column
					.text Some content here

		.section
			.title Text Alignment Utilities
			.stack.t-gap-2.t-mb-8
				p.text-left This text is left aligned
				p.text-center This text is center aligned
				p.text-right This text is right aligned
				p.text-justify This text is justified. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.
				p.text-start This text is start aligned (LTR: left, RTL: right)
				p.text-end This text is end aligned (LTR: right, RTL: left)
			pre .text-left, .text-center, .text-right, .text-justify, .text-start, .text-end

	// Utility Classes Demo
	section#utility-classes-demo.section
		.title Utility Classes Demo
		.stack.t-gap-4
			// .hidden
			.block
				span.hidden This text is hidden (should not be visible)
				span This text is visible
				pre .hidden

			// .vanish
			.block
				span.vanish This text is vanished (should not be visible)
				span This text is visible
				pre .vanish

			// .contents
			.block.contents(style="background: #eee; padding: 8px;")
				span This block uses .contents (should behave as contents)
				pre .contents

			// .light, .bolder, .heavy
			.block
				span.light Light
				span.normal Normal
				span.bold Bold
				span.bolder Bolder
				span.heavy Heavy
				pre .light, .normal, .bold, .bolder, .heavy

			// .overlay
			.block(style="position:relative; height:60px;")
				span This block has an overlay
				span.overlay(style="background:rgba(0,0,0,0.3); color:#fff; position:absolute; top:0; left:0; width:100%; height:100%; display:flex; align-items:center; justify-content:center;") Overlay
				pre .overlay

			// .glass
			.block(style="background:url('https://picsum.photos/200/60?blur=2'); padding:0; width:200px; height:60px; position:relative;")
				span.glass(style="display:block; width:100%; height:100%; padding:12px; color:#222;") Glassmorphism
				pre .glass

			// .tooltip
			.block(style="position:relative; display:inline-block;")
				span Tooltip target
				span.tooltip(style="position:absolute; left:100%; top:0; margin-left:8px;") Tooltip text
				pre .tooltip

			// .divider
			.block
				span Above divider
				.divider
				span Below divider
				pre .divider

			// .skeleton
			.block
				div.skeleton(style="width:120px; height:24px;")
				pre .skeleton

			// .loader
			.block
				span Loader:
				span.loader(style="vertical-align:middle; margin-left:8px;")
				pre .loader

			// .scroll, .scroll-x, .scroll-y
			.block(style="height:60px; width:200px;")
				div.scroll(style="height:100%; width:100%; background:#f5f5f5;")
					span(style="white-space:nowrap;") Scrollable content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod.
				pre .scroll
			.block(style="height:40px; width:120px;")
				div.scroll-x(style="width:100%; background:#f5f5f5;")
					span(style="white-space:nowrap;") Horizontal scroll. Lorem ipsum dolor sit amet.
				pre .scroll-x
			.block(style="height:80px; width:60px;")
				div.scroll-y(style="height:100%; background:#f5f5f5;")
					span(style="display:block; height:120px;") Vertical scroll. Lorem ipsum dolor sit amet.
				pre .scroll-y

			// .centered
			.block(style="background:#e0f7fa; width:120px;")
				span.centered(style="display:block;") This block is centered
				pre .centered

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

</style> 