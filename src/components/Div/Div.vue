<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  data: () => ({
    classes: []
  }),
  created () {
    this.classes.push('Div--' + this.VkPlatform)
  }
}
</script>
