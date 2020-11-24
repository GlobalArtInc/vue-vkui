<template>
  <div :class="['Counter', 'Counter--' + VkPlatform, 'Counter--' + mode, 'Counter--s-' + size]">
    <div class="Counter__in">
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
  }
}
</script>
