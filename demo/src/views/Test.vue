<template lang="pug">
//- Page wrapper, full‑screen dark layout with left sidebar
div.b-layout.b-layout--sidebar-left.b-layout--fullscreen.b
	//- Sidebar (thread list + “New Chat” + login)
	aside.b-layout-sidebar.b-bg.b-text
		.b-col.b-start.b-full
			//- “New Chat” button
			button.b-block(type="button") New Chat

			//- Recent Threads
			nav.b-col
				h2.b-block Recent Threads
				ul.b-col
					li.b-row.b-between
						span Welcome to T3 Chat
					li.b-row Why T3 Chat?
					li.b-row FAQ

			a.b-btn(href="#") Login

	//- Main content area
	main.b-layout-main.b-col.b-between.b-bg.b-text
		//- Header for current thread
		header.b-row.b-between.b-center-y.b-full-x
			a.b-btn(href="#").b-center-y
				span &larr;  

		//- Chat messages container
		section.b-col.b-gap.b-full-x
			.b-block.b-end
				h1 What is T3 Chat?
			//- System / intro messages
			.b-block.b-prose
				h2 T3 Chat is the best AI Chat ever made.
				h3.b-text LLMs have gotten great. Their apps have not.
				p It’s hard to overstate how powerful…
				p That’s why we built T3 Chat.
				h4 Every AI chat app felt like Slack. This one feels like Linear.
				p You’ve never used a faster, more reliable chat app than T3 Chat…

		//- Input area
		footer.b-col.b-gap.b-block.b-end-y.b-full-x.b-center-x
			p.b-text.b-center Make sure you agree to our Terms and our Privacy Policy
			form.b-row.b-between
				textarea.b-textarea(placeholder="Type your message here…")
				button.b-btn.b-btn-primary(type="submit") Send

</template>

<script setup lang="ts">
// Component logic here
</script>

<style lang="less" scoped>
.b-block { @apply border; }
.test-view {
	padding: 20px;
}
</style>