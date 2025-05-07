<template lang="pug">
div.layout.layout--fullscreen.layout--fixed-header
  header.layout-header-fixed.t-bg-zinc-900.t-text-white.row.center-y.full-y
    slot(name="header")
      .default-header
        .title.lighter Default Title
  .layout-content
    .row
      slot(name="sidebar")
      main.layout-main.col.between.layout-max-sm.layout--header-padding#main-content
        slot(name="main")
        slot(name="footer")
</template>

<script setup lang="ts">
// No props needed - header is customizable via slot
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