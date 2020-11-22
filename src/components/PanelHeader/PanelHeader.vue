<template>
  <div class="PanelHeader PanelHeader--android PanelHeader--shadow PanelHeader--vis PanelHeader--no-left PanelHeader--no-right">
    <FixedLayout>
      <div class="PanelHeader__in">
        <div class="PanelHeader__left">
        </div>
        <div class="PanelHeader__content">
          <slot />
        </div>
        <div class="PanelHeader__right">
        </div>
      </div>
    </FixedLayout>
    <Separator v-if="separator === true" className="PanelHeader__separator" />
  </div>
</template>

<script>
export default {
  props: {
    side: {
      default: false
    },
    separator: {
      default: true
    }
  }
}
</script>
