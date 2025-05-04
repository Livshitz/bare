<template lang="pug">
// Documentation Header
section.b-section
	h1.text-2xl.font-bold.mb-4 Primitives Demo
	p.mb-4 This demo showcases the core primitives (Button, Badge) available in the design system.

.b-stack.gap-8
	// Button Primitive Demo
	section#button-demo
		.b-section
			h2.text-xl.font-bold.mb-4 Button Primitives
			.b-stack.gap-4
				// Variants Grouped
				.b-stack.gap-2
					span.font-semibold Variants
					.b-row.gap-2
						button.b-btn Default
						button.b-btn.b-btn-primary Primary
						button.b-btn.b-btn-secondary Secondary
						button.b-btn.b-btn-ghost Ghost
						button.b-btn(disabled) Disabled
					pre.bg-gray-800.p-2.rounded.text-white.font-mono
						| button.b-btn
						| button.b-btn.b-btn-primary
						| button.b-btn.b-btn-secondary
						| button.b-btn.b-btn-ghost
						| button.b-btn(disabled)
				// Sizes Grouped
				.b-stack.gap-2
					span.font-semibold Sizes
					.b-row.gap-2
						button.b-btn.b-btn-sm Small
						button.b-btn Medium
						button.b-btn.b-btn-lg Large
					pre.bg-gray-800.p-2.rounded.text-white.font-mono
						| button.b-btn.b-btn-sm
						| button.b-btn
						| button.b-btn.b-btn-lg
				// Block & Disabled
				.b-row.gap-4
					.b-stack.gap-2
						span.font-semibold Block
						button.b-btn.b-btn-block(style="width:100%") Block Button
						pre.bg-gray-800.p-2.rounded.text-white.font-mono button.b-btn.b-btn-block

	// Badge Primitive Demo
	section#badge-demo
		.b-section
			h2.text-xl.font-bold.mb-4 Badge Primitives
			.b-stack.gap-4
				// Default
				.b-stack.gap-2
					span.font-semibold Default
					span.b-badge Default
					pre.bg-gray-800.p-2.rounded.text-white.font-mono span.b-badge
				// Color Variants
				.b-stack.gap-2
					span.font-semibold Color Variants
					.b-row.gap-2
						span.b-badge.b-badge-primary Primary
						span.b-badge.b-badge-success Success
						span.b-badge.b-badge-warning Warning
						span.b-badge.b-badge-danger Danger
					pre.bg-gray-800.p-2.rounded.text-white.font-mono
						| .b-badge.b-badge-primary
						| .b-badge.b-badge-success
						| .b-badge.b-badge-warning
						| .b-badge.b-badge-danger
				// Sizes
				.b-stack.gap-2
					span.font-semibold Sizes
					.b-row.gap-2
						span.b-badge.b-badge-sm Small
						span.b-badge Medium
						span.b-badge.b-badge-lg Large
					pre.bg-gray-800.p-2.rounded.text-white.font-mono
						| .b-badge.b-badge-sm
						| .b-badge
						| .b-badge.b-badge-lg

	// Input Primitive Demo
	section#input-demo
		.b-section
			h2.text-xl.font-bold.mb-4 Input Primitives
			.b-stack.gap-4
				// Input Default
				.b-stack.gap-2
					span.font-semibold Default Input
					input.b-input(type="text" placeholder="Default input")
					pre.bg-gray-800.p-2.rounded.text-white.font-mono input.b-input
				// Input States
				.b-stack.gap-2
					span.font-semibold Input States
					.b-stack.gap-2
						input.b-input(type="text" placeholder="Disabled state" disabled)
					pre.bg-gray-800.p-2.rounded.text-white.font-mono
						| input.b-input(:hover)
						| input.b-input(:focus)
						| input.b-input(disabled)
				// Input Sizes
				.b-stack.gap-2
					span.font-semibold Input Sizes
					.b-stack.gap-2
						input.b-input.b-input-sm(type="text" placeholder="Small input")
						input.b-input(type="text" placeholder="Medium input")
						input.b-input.b-input-lg(type="text" placeholder="Large input")
					pre.bg-gray-800.p-2.rounded.text-white.font-mono
						| input.b-input.b-input-sm
						| input.b-input
						| input.b-input.b-input-lg
				// Textarea
				.b-stack.gap-2
					span.font-semibold Textarea
					textarea.b-textarea(placeholder="Default textarea")
					pre.bg-gray-800.p-2.rounded.text-white.font-mono textarea.b-textarea
				// Textarea States
				.b-stack.gap-2
					span.font-semibold Textarea States
					.b-stack.gap-2
						textarea.b-textarea(placeholder="Disabled state" disabled)
					pre.bg-gray-800.p-2.rounded.text-white.font-mono
						| textarea.b-textarea(:hover)
						| textarea.b-textarea(:focus)
						| textarea.b-textarea(disabled)
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

.b-section>.b-title {
	margin-bottom: 1rem;
}

.b-row.gap-2 {
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	align-items: center;
}

.b-row.gap-4 {
	display: flex;
	flex-direction: row;
	gap: 1rem;
	align-items: flex-start;
}
</style>