<template lang="pug">
div.layout.layout--fullscreen(:class="{ 'layout--fixed-header': fixedHeader }")
	header.t-bg-zinc-900.t-text-white.t-border-b.t-border-zinc-800.row.center-y.full-y.layout-header(:class="{ 'layout-header-fixed': fixedHeader }", v-if="$slots.header")
		slot(name="header", v-if="$slots.header")
			.default-header
				.title.lighter Default Title
	.layout-content
		.row
			slot(name="sidebar", v-if="$slots.sidebar")
			main.layout-main.col.between(:class="{ 'layout--header-padding': fixedHeader && $slots.header, 'layout-max-sm': !route.meta?.isWide }")#main-content.bg-100.full-screen-y
				slot(name="main")
				slot(name="footer", v-if="$slots.footer")
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

// No props needed - header is customizable via slot
const props = defineProps<{
	fixedHeader?: boolean;
}>();
const fixedHeader = props.fixedHeader !== false;
const route = useRoute();
</script>

<style lang="less" scoped>
.default-header {
	width: 100%;
	direction: inherit;
}

// RTL support for .rtl or [dir=rtl]
:global(.rtl) .default-header,
:global([dir="rtl"]) .default-header {
	flex-direction: row-reverse !important;
}
</style>