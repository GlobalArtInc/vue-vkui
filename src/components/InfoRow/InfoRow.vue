<template>
  <div :class="classes">
    <VkSubhead v-if="header" weight="regular">{{ header }}</VkSubhead>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String
    }
  },
  data: () => ({
    classes: ['InfoRow']
  }),
  created () {
    this.classes.push('InfoRow--' + this.VkPlatform)
  }
}
</script>
