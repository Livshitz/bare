<template lang="pug">
PageWithSidebar(:fixedHeader="true" :collapsible="false || $app.helpers.breakpoints.isLtSM.value")
	template(#header)
		.title.lighter Test
	template(#sidebar)
		.block.row.between
			.btn-ghost.caption.full(type="button") New Chat

		nav.block.col
			.label.t-mb-2 Recent Threads
			.stack-sm
				router-link.btn-ghost.row.start(to="/demo/login") Login
				router-link.btn-ghost.row.start(to="/demo/signup") Sign Up
				router-link.btn-ghost.row.start(to="/demo/payment") Payment
				router-link.btn-ghost.row.start(to="/demo/calculator") Calculator
				router-link.btn-ghost.row.start(to="/demo/liv") Liv
				router-link.btn-ghost.row.start(to="/demo/playground") Playground
				.btn-ghost.row.start Welcome to T3 Chat
				.btn-ghost.row.start Why T3 Chat?
				.btn-ghost.row.start FAQ

		.block
			.row.gap
				router-link.btn.flex(to="/demo/login") Login
				button.btn-ghost.btn-circle(@click="$app.helpers.darkMode.toggleDarkMode")
					.t-w-5.t-h-5(v-if="$app.helpers.darkMode.isDark")
						i.fa-solid.fa-sun
					.t-w-5.t-h-5(v-else)
						i.fa-solid.fa-moon

	template(#main)
		section.col.gap.full-x.prose
			.row.block-no-bg.end
				h1.text-accent What is T3 Chat?

			.block-no-bg
				h2 T3 Chat is the best AI Chat ever made.
				h3.text LLMs have gotten great. Their apps have not.
				p It's hard to overstate how powerful…
				p That's why we built T3 Chat.
				h4 Every AI chat app felt like Slack. This one feels like Linear.
				p You've never used a faster, more reliable chat app than T3 Chat…
			
		//- section.col.gap.full-x.prose
			.row.block-no-bg.end
				h1.text-accent What is T3 Chat?

			.block-no-bg
				h2 T3 Chat is the best AI Chat ever made.
				h3.text LLMs have gotten great. Their apps have not.
				p It's hard to overstate how powerful…
				p That's why we built T3 Chat.
				h4 Every AI chat app felt like Slack. This one feels like Linear.
				p You've never used a faster, more reliable chat app than T3 Chat…

	template(#footer)
		footer.col.gap.block-no-bg.end-y.full-x.center-x
			form.row.between
				textarea.textarea(placeholder="Type your message here…")
				button.btn.btn-primary.full-y(type="submit") Send
			p.text-xs.center Make sure you agree to our Terms and our Privacy Policy
</template>

<script setup lang="ts">
import { PageWithSidebar } from '@bod.ee/bare/components';
</script>

<style lang="less" scoped>
// .block { @apply t-border; }
.test-view {
	padding: 20px;
}
</style>