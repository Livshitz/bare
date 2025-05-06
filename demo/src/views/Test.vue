<template lang="pug">
div.layout.layout--fullscreen.layout--fixed-header
	header.layout-header-fixed.t-bg-zinc-600.row.between.center-y.t-px-4.t-text-white
			.row.center-y.gap
				.btn-ghost.caption(@click="isSidebarOpen = !isSidebarOpen")
					i.fa-solid.fa-bars.t-text-white.text-md
					//- i.fa-solid.fa-ellipsis-vertical.t-text-white.text-xl
					//- i.fa-solid.fa-equals.t-text-white.text-xl
				.title.lighter Test

	.row
		aside.layout-sidebar#sidebar(:class="{ 'sidebar-collapsed': !isSidebarOpen }").layout--header-padding
			.col.full
				.block
					.row.between
						.btn-ghost.caption(type="button") New Chat

				nav.block.col.bg
					.label.t-mb-2 Recent Threads
					ul
						li.btn-ghost.row.start Welcome to T3 Chat
						li.btn-ghost.row.start Why T3 Chat?
						li.btn-ghost.row.start FAQ

				.block
					.row.gap
						a.btn.flex(href="/#123") Login
						button.btn-ghost.btn-circle(@click="$app.helpers.toggleDarkMode")
							.t-w-5.t-h-5(v-if="$app.helpers.getIsDark().value")
								i.fa-solid.fa-sun
							.t-w-5.t-h-5(v-else)
								i.fa-solid.fa-moon

		main.layout-main.col.between.layout-max-sm#main-content(:class="{ 'main-content-shifted': isSidebarOpen }").layout--header-padding
			section.col.gap.full-x.prose
				.row.block-no-bg.end
					h1 What is T3 Chat?
					button.btn-ghost.caption(@click="isSidebarOpen = !isSidebarOpen")
						i.fa-solid.fa-angle-right

				.block-no-bg
					h2 T3 Chat is the best AI Chat ever made.
					h3.text LLMs have gotten great. Their apps have not.
					p It's hard to overstate how powerful…
					p That's why we built T3 Chat.
					h4 Every AI chat app felt like Slack. This one feels like Linear.
					p You've never used a faster, more reliable chat app than T3 Chat…

			footer.col.gap.block-no-bg.end-y.full-x.center-x
				form.row.between
					textarea.textarea(placeholder="Type your message here…")
					button.btn.btn-primary.full-y(type="submit") Send
				p.text-xs.center Make sure you agree to our Terms and our Privacy Policy

</template>

<script setup lang="ts">
import { ref } from 'vue';

const isSidebarOpen = ref(true);

// Component logic here
</script>

<style lang="less" scoped>
// .block { @apply t-border; }
.test-view {
	padding: 20px;
}

@delay: 0.3s ease;

// Styles for the sidebar itself
#sidebar {
  transition: width @delay, padding @delay, opacity @delay;
  overflow: hidden; // Hide content when collapsing positioning the toggle button when collapsed
}

#sidebar.sidebar-collapsed {
  position: fixed; // Take out of document flow
  top: 0;
  width: 0px;
  height: 100vh;
  min-width: 0px;
  padding-left: 0;
  padding-right: 0;
  opacity: 0; // Make fully transparent
  transition: width @delay, padding @delay, opacity @delay;
}

</style>