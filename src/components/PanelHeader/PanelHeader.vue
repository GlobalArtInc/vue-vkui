<template>
  <div v-if="side === true" class="PanelHeader__in">
    <div class="PanelHeader__left"></div>
    <div class="PanelHeader__content"></div>
    <div class="PanelHeader__right"></div>
  </div>
  <div
    v-else
    class="PanelHeader PanelHeader--android PanelHeader--shadow PanelHeader--vis PanelHeader--no-left PanelHeader--no-right">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    side: {
      default: false
    }
  }
}
</script>
