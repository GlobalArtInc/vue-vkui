<template>
  <div class="FixedLayout FixedLayout--android FixedLayout--top PanelHeader__fixed PanelHeader__fixed--shadow">
    <div class="FixedLayout__in">
      <slot />
    </div>
  </div>
</template>

<style>
.FixedLayout--top {
  width: 100%;
  top: 0;
}
.FixedLayout {
  position: fixed;
  box-sizing: border-box;
  left: auto;
  z-index: 3;
  padding-left: 0;
  padding-right: 0;
}
.FixedLayout, .FixedLayout__in {
  height: 56px;
}

.PanelHeader__fixed {
  background: #fff;
}
</style>
