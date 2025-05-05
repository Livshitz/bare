<template lang="pug">
// Documentation Header
section.section
	h1.text-2xl.font-bold.mb-4 Primitives Demo
	p.mb-4 This demo showcases the core primitives (Button, Badge) available in the design system.

.stack.gap-8
	// Button Primitive Demo
	section#button-demo
		.section
			h2.text-xl.font-bold.mb-4 Button Primitives
			.stack.gap-4
				// Variants Grouped
				.stack.gap-2
					span.font-semibold Variants
					.row.gap-2
						button.btn Default
						button.btn.btn-primary Primary
						button.btn.btn-secondary Secondary
						button.btn.btn-ghost Ghost
						button.btn(disabled) Disabled
					pre.bg-gray-800.p-2.rounded.text-white.font-mono
						| button.btn
						| button.btn.btn-primary
						| button.btn.btn-secondary
						| button.btn.btn-ghost
						| button.btn(disabled)
				// Sizes Grouped
				.stack.gap-2
					span.font-semibold Sizes
					.row.gap-2
						button.btn.btn-sm Small
						button.btn Medium
						button.btn.btn-lg Large
					pre.bg-gray-800.p-2.rounded.text-white.font-mono
						| button.btn.btn-sm
						| button.btn
						| button.btn.btn-lg
				// Block & Disabled
				.row.gap-4
					.stack.gap-2
						span.font-semibold Block
						button.btn.btn-block(style="width:100%") Block Button
						pre.bg-gray-800.p-2.rounded.text-white.font-mono button.btn.btn-block

	// Badge Primitive Demo
	section#badge-demo
		.section
			h2.text-xl.font-bold.mb-4 Badge Primitives
			.stack.gap-4
				// Default
				.stack.gap-2
					span.font-semibold Default
					span.badge Default
					pre.bg-gray-800.p-2.rounded.text-white.font-mono span.badge
				// Color Variants
				.stack.gap-2
					span.font-semibold Color Variants
					.row.gap-2
						span.badge.badge-primary Primary
						span.badge.badge-success Success
						span.badge.badge-warning Warning
						span.badge.badge-danger Danger
					pre.bg-gray-800.p-2.rounded.text-white.font-mono
						| .badge.badge-primary
						| .badge.badge-success
						| .badge.badge-warning
						| .badge.badge-danger
				// Sizes
				.stack.gap-2
					span.font-semibold Sizes
					.row.gap-2
						span.badge.badge-sm Small
						span.badge Medium
						span.badge.badge-lg Large
					pre.bg-gray-800.p-2.rounded.text-white.font-mono
						| .badge.badge-sm
						| .badge
						| .badge.badge-lg

	// Input Primitive Demo
	section#input-demo
		.section
			h2.text-xl.font-bold.mb-4 Input Primitives
			.stack.gap-4
				// Input Default
				.stack.gap-2
					span.font-semibold Default Input
					input.input(type="text" placeholder="Default input")
					pre.bg-gray-800.p-2.rounded.text-white.font-mono input.input
				// Input States
				.stack.gap-2
					span.font-semibold Input States
					.stack.gap-2
						input.input(type="text" placeholder="Disabled state" disabled)
					pre.bg-gray-800.p-2.rounded.text-white.font-mono
						| input.input(:hover)
						| input.input(:focus)
						| input.input(disabled)
				// Input Sizes
				.stack.gap-2
					span.font-semibold Input Sizes
					.stack.gap-2
						input.input.input-sm(type="text" placeholder="Small input")
						input.input(type="text" placeholder="Medium input")
						input.input.input-lg(type="text" placeholder="Large input")
					pre.bg-gray-800.p-2.rounded.text-white.font-mono
						| input.input.input-sm
						| input.input
						| input.input.input-lg
				// Textarea
				.stack.gap-2
					span.font-semibold Textarea
					textarea.textarea(placeholder="Default textarea")
					pre.bg-gray-800.p-2.rounded.text-white.font-mono textarea.textarea
				// Textarea States
				.stack.gap-2
					span.font-semibold Textarea States
					.stack.gap-2
						textarea.textarea(placeholder="Disabled state" disabled)
					pre.bg-gray-800.p-2.rounded.text-white.font-mono
						| textarea.textarea(:hover)
						| textarea.textarea(:focus)
						| textarea.textarea(disabled)
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { app, helpers } from '../main';

// helpers.toggleDarkMode();
</script>

<style lang="less" scoped>
@import (reference) '../../../src/variables.less';
@import (reference) '../../../src/primitives/button.less';
@import (reference) '../../../src/primitives/badge.less';
@import (reference) '../../../src/primitives/input.less';

.section>.title {
	margin-bottom: 1rem;
}

.row.gap-2 {
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	align-items: center;
}

.row.gap-4 {
	display: flex;
	flex-direction: row;
	gap: 1rem;
	align-items: flex-start;
}
</style>