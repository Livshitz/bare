<template lang="pug">
div.layout.layout--fullscreen(:class="{ 'layout--fixed-header': fixedHeader }")
  header.t-bg-zinc-900.t-text-white.t-border-b.t-border-zinc-800.row.center-y.full-y.layout-header(:class="{ 'layout-header-fixed': fixedHeader }")
    slot(name="header")
      .default-header
        .title.lighter Default Title
  .layout-content
    .row
      slot(name="sidebar")
      main.layout-main.col.between.layout-max-sm(:class="{ 'layout--header-padding': fixedHeader }")#main-content
        slot(name="main")
        slot(name="footer")
</template>

<script setup lang="ts">
// No props needed - header is customizable via slot
const props = defineProps<{
  fixedHeader?: boolean;
}>();
const fixedHeader = props.fixedHeader !== false;
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