<template>
  <div :class="classes">
    <div class="FixedLayout__in">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    classes: ['FixedLayout']
  }),
  created () {
    this.classes.push(`FixedLayout--${this.VkPlatform}`)
    this.classes.push('FixedLayout--top')
    this.classes.push('FixedLayout--filled')
    this.classes.join(' ')
  }
}
</script>
