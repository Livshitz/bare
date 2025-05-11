<template lang="pug">
Page(:fixedHeader="props.fixedHeader", :class="{ 'layout-has-fixed-header': props.fixedHeader }")
	template(#header)
		.row.center-y.t-px-4.full-y
			.btn-ghost.caption(v-if="props.collapsible", @click="isSidebarOpen = !isSidebarOpen")
				i.fa-solid.fa-bars.t-text-white.text-md
			slot(name="header")

	// Sidebar
	template(#sidebar)
		.overlay(v-if="props.collapsible && isSidebarOpen", @click="isSidebarOpen = false")
		aside.layout-sidebar.bg-200#sidebar(:class="{ 'sidebar-collapsed': props.collapsible && !isSidebarOpen, 'layout-sidebar-collapsable': props.collapsible, 'layout-sidebar-not-collapsable': !props.collapsible  }")
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

const props = defineProps<{
  collapsible?: boolean;
  fixedHeader?: boolean;
}>();

const isSidebarOpen = ref(false);
</script>

<style lang="less" scoped>
@delay: 0.3s ease;
</style> 