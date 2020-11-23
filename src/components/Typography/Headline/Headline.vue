<template>
  <h3 :class="classes" v-if="VkPlatform === 'android'"><slot/></h3>
  <h4 :class="classes" v-else><slot /></h4>
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
    classes: ['Headline']
  }),
  created () {
    this.classes.push('Headline--' + this.VkPlatform)
    if (this.VkPlatform === 'android' && this.weight === 'semibold') {
      this.classes.push('Headline--w-medium')
    } else {
      this.classes.push('Headline--w-' + this.weight)
    }
  }
}
</script>
