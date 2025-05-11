<template lang="pug">
.layout.layout--fixed-header.stack.t-gap-8(:class="{ 'layout--no-header': route.meta.hideHeader }")
	//- .xx-spacer.t-p-4(v-if="!route.meta.hideHeader") &nbsp;
	header.t-p-4.bg.t-opacity-90(v-if="!route.meta.hideHeader")
		.row.col-xs.between
			h1.t-text-4xl.t-font-bold @bod.ee/bare Demo
			.t-flex.t-gap-4
				router-link.btn-ghost(to="/demo/atoms") Atoms
				router-link.btn-ghost(to="/demo/patterns") Patterns
				router-link.btn-ghost(to="/demo/primitives") Primitives
				router-link.btn-ghost(to="/demo/icons") Icons
				router-link.btn-ghost(to="/demo/test") Test
				button.btn-ghost.btn-circle(@click="toggleDarkMode")
					svg.t-w-5.t-h-5(v-if="isDark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
						path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z")
					svg.t-w-5.t-h-5(v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
						path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z")
	main(:class="{ 'narrow': !route.meta.isWide }")
		router-view
</template>

<script setup lang="ts">
import { helpers } from './main'
import { useRoute } from 'vue-router'

const { isDark, toggleDarkMode } = {
	isDark: helpers.darkMode.isDark,
	toggleDarkMode: () => helpers.darkMode.toggleDarkMode()
}
const route = useRoute()
</script>

<style lang="less">
// .layout--fixed-header > main { padding-top:6rem !important; }
</style>