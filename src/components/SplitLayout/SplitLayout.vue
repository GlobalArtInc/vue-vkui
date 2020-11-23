<template>
  <div :class="classes">
    <slot name="header"/>
    <div :class="classesSlot">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    classes: ['PopoutRoot', 'SplitLayout'],
    classesSlot: ['SplitLayout__inner']
  }),
  mounted () {
    if (this.$slots.header !== undefined) {
      this.classesSlot.push('SplitLayout__inner--header')
    }
  },
  created () {
    console.log(this.$slots.default)
    this.classes.push('SplitLayout--' + this.VkPlatform)
  }
}
</script>
