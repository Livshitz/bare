<template lang="pug">
Page
	template(#header)
		.row.center-y.t-px-4.full-y
			.btn-ghost.caption(@click="isSidebarOpen = !isSidebarOpen")
				i.fa-solid.fa-bars.t-text-white.text-md
			slot(name="header")

	// Sidebar
	template(#sidebar)
		.overlay(v-if="isSidebarOpen", @click="isSidebarOpen = false")
		aside.layout-sidebar.bg-200#sidebar(:class="{ 'sidebar-collapsed': !isSidebarOpen }")
			.col.full
				slot(name="sidebar")

	// Main and footer
	template(#main)
		slot(name="main")
	template(#footer)
		slot(name="footer")
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Page from './Page.vue';

const isSidebarOpen = ref(false);

// Slots for users to inject content into the header sections
// alongside the sidebar toggle
// defineSlots<{ 
//   'header-start': any,
//   'header-center': any,
//   'header-end': any
// }>()

</script>

<style lang="less" scoped>
@delay: 0.3s ease;

.overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 1000;
}
</style>