<template>
  <div
    :class="classes">
    <div class="Progress__bg" />
    <div class="Progress__in" :style="`width: ${value}%`" />
  </div>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    classes: ['Progress']
  }),
  created () {
    this.classes.push('Progress--' + this.VkPlatform)
  }
}
</script>
