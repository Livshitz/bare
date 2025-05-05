<template lang="pug">
//- Page wrapper, full‑screen dark layout with left sidebar
div.layout.layout--sidebar-left.layout--fullscreen.b
	//- Sidebar (thread list + “New Chat” + login)
	aside.layout-sidebar
		.col.start.full
			//- “New Chat” button
			.block
				.btn-ghost.caption(type="button") New Chat

			//- Recent Threads
			nav.block.col.bg
				.label.t-mb-2 Recent Threads
				ul.col
					li.row.between
						span Welcome to T3 Chat
					li.row Why T3 Chat?
					li.row FAQ

			.block
				a.btn(href="#") Login

	//- Main content area
	main.layout-main.col.between.layout-max-sm
		//- Header for current thread
		//- header.row.between.center-y.full-x
			//- a.btn(href="#").center-y
				span &larr;  

		//- Chat messages container
		section.col.gap.full-x
			.block.end
				h1 What is T3 Chat?
			//- System / intro messages
			.block.prose
				h2 T3 Chat is the best AI Chat ever made.
				h3.text LLMs have gotten great. Their apps have not.
				p It’s hard to overstate how powerful…
				p That’s why we built T3 Chat.
				h4 Every AI chat app felt like Slack. This one feels like Linear.
				p You’ve never used a faster, more reliable chat app than T3 Chat…

		//- Input area
		footer.col.gap.block.end-y.full-x.center-x
			p.text.center Make sure you agree to our Terms and our Privacy Policy
			form.row.between
				textarea.textarea(placeholder="Type your message here…")
				button.btn.btn-primary(type="submit") Send

</template>

<script setup lang="ts">
// Component logic here
</script>

<style lang="less" scoped>
// .block { @apply t-border; }
.test-view {
	padding: 20px;
}
</style>