<template>
  <div :class="['Header', 'Header--' + VkPlatform, 'Header--mode-' + mode]">
    <div class="Header__in">
      <div class="Header__content">
        <slot />
        <div class="Header__subtitle" v-if="subtitle" v-text="subtitle" />
      </div>
      <div class="Header__aside">
        <slot name="aside" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subtitle: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
