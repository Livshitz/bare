<template lang="pug">
.layout.layout--fixed-header(style='background: #FFF;').narrow
	.layout-header.row.center-y.justify-between.block-no-bg
		.block
		.col.flex.center
			p.text-lg.font-bold Ethan Carter
		.col-auto
			.btn-ghost
				i.icon-lg.fa-solid.fa-bars
	.layout-main.row.gap.center.text-center
		.block-no-bg.stack.gap.center
			.avatar.rounded.glass(style='background: url(<path-to-image>) lightgray 50% / cover no-repeat; width: 128px; height: 128px; border-radius: 64px;')
			.stack.gap
				h2.title.text-accent.font-bold Ethan Carter
				p.text-muted Developer &amp; Entrepreneur
				p.text-muted Building innovative solutions and sharing insights.
		
	.block-no-bg.stack.gap-md
		p.title.text-lg Code Libraries

		.row.gap.scroll-x
			.col.flex.card
				.rounded(style='height: 160px; width: 160px; background: url(<path-to-image>) lightgray 50% / cover no-repeat;')
				.col
					p.title React Utils
					p.text-muted A collection of React utility functions.
			.col.flex.card
				.rounded(style='height: 160px; width: 160px; background: url(<path-to-image>) lightgray 50% / cover no-repeat;')
				.col
					p.title Node.js Helpers
					p.text-muted Useful Node.js helper functions.
			.col.flex.card
				.rounded(style='height: 160px; width: 160px; background: url(<path-to-image>) lightgray 50% / cover no-repeat;')
				.col
					p.title Python Scripts
					p.text-muted Python scripts for various tasks.

	.block-no-bg.stack.gap-md
		p.title.text-lg Blog Posts
		.row.gap.scroll-x
			.block
				.row.between
					.col
						p.label.text-muted Tech
						h3.title The Future of Web Development
						p.text-sm.text-muted Exploring the latest trends and technologies shaping the web.
					.col
						.skeleton(style='width: 111px; height: 111px;')

			.block
				.row.between
					.col
						p.label.text-muted Entrepreneurship
						h3.title Building a Successful Startup
						p.text-sm.text-muted Key strategies and insights for launching and growing a startup.
					.col
						.skeleton(style='width: 111px; height: 111px;')
	
	.block-no-bg.stack.gap-md
		p.title.text-lg Utilities
		.col.gap
			.grid-2.xs-grid-1.gap
				.card.flex.row.center
					.col
						i.fa-solid.fa-calculator.icon
					.col
						p.text-strong Calculator
				.card.flex.row.center
					.col
						i.fa-solid.fa-clock-four.icon
					.col
						p.text-strong Timer
				.card.flex.row.center
					.col
						i.fa-solid.fa-calendar-check.icon
					.col
						p.text-strong Calendar

		
</template>

<script setup lang="ts">
// @ts-ignore: Allow importing JSON modules
import { ref, onMounted } from 'vue';
import Page from '@/components/Page.vue';


</script> 