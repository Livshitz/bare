<template lang="pug">
PageWithSidebar
	template(#header)
		.title.lighter Test
	template(#sidebar)
		.block.row.between
			.btn-ghost.caption.full(type="button") New Chat

		nav.block.col.bg
			.label.t-mb-2 Recent Threads
			ul
				li.btn-ghost.row.start Welcome to T3 Chat
				li.btn-ghost.row.start Why T3 Chat?
				li.btn-ghost.row.start FAQ

		.block
			.row.gap
				a.btn.flex(href="/#123") Login
				button.btn-ghost.btn-circle(@click="$app.helpers.darkMode.toggleDarkMode")
					.t-w-5.t-h-5(v-if="$app.helpers.darkMode.isDark")
						i.fa-solid.fa-sun
					.t-w-5.t-h-5(v-else)
						i.fa-solid.fa-moon

	template(#main)
		section.col.gap.full-x.prose
			.row.block-no-bg.end
				h1.accent-text What is T3 Chat?

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
import PageWithSidebar from '../components/PageWithSidebar.vue';
</script>

<style lang="less" scoped>
// .block { @apply t-border; }
.test-view {
	padding: 20px;
}
</style>