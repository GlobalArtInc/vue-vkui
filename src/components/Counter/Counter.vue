<template>
  <div :class="classes">
    <div className="Counter__in">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      default: 'primary'
    },
    size: {
      default: 'm'
    }
  },
  data: () => ({
    classes: ['Counter']
  }),
  created () {
    this.classes.push('Counter--' + this.VkPlatform)
    this.classes.push('Counter--' + this.mode)
    this.classes.push('Counter--s-' + this.size)
  }
}
</script>
