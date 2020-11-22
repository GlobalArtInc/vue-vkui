<template>
  <div :class="classes">
    <FixedLayout v-if="fixed === true">
      <div class="PanelHeader__in">
        <div class="PanelHeader__left">
          <slot name="left"></slot>
        </div>
        <div class="PanelHeader__content">
          <slot/>
        </div>
        <div class="PanelHeader__right">
          <slot name="right"></slot>
        </div>
      </div>
    </FixedLayout>
    <Separator v-if="separator === true" className="PanelHeader__separator"/>
  </div>
</template>

<script>
export default {
  data: () => ({
    classes: ['PanelHeader']
  }),
  props: {
    separator: {
      default: true
    },
    transparent: {
      default: false
    },
    visor: {
      default: true
    },
    fixed: {
      default: true
    }
  },
  created () {
    // eslint-disable-next-line no-undef
    this.classes.push(`PanelHeader--${VkPlatform}`)
    if (this.transparent === true) {
      this.classes.push('PanelHeader--trnsp')
    }
    if (this.separator === true) {
      this.classes.push('PanelHeader--sep')
    }
    if (this.visor === true) {
      this.classes.push('PanelHeader--vis')
    }
    if (this.fixed === true) {
      this.classes.push('PanelHeader--fixed')
    }
    this.classes.push('PanelHeader--no-left')
    this.classes.push('PanelHeader--no-right')
    this.classes = this.classes.join(' ')
  }
}
</script>
