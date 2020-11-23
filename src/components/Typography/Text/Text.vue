<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    weight: {
      type: String,
      default: 'regular'
    }
  },
  data: () => ({
    classes: ['Text']
  }),
  created () {
    this.classes.push('Text--' + this.VkPlatform)
    this.classes.push('Text--w-' + this.weight)
  }
}
</script>
