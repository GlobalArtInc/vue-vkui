<template>
  <div :class="['Tabs', 'Tabs--' + VkPlatform, 'Tabs--' + mode]">
    <div class="Tabs__in">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'default'
    }
  }
}
</script>
