<template>
  <div :class="classes">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    weight: {
      type: String,
      default: 'regular'
    },
    level: {
      type: String,
      required: true
    },
    caps: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    classes: ['Caption']
  }),
  created () {
    this.classes.push('Caption--' + this.VkPlatform)

    console.log(this.level)

    if (this.VkPlatform === 'android' && this.weight === 'semibold') {
      this.classes.push('Caption--w-medium')
    } else {
      this.classes.push('Caption--w-' + this.weight)
    }
    this.classes.push('Caption--l-' + this.level)
    if (this.caps) {
      this.classes.push('Caption--caps')
    }
  }
}
</script>
