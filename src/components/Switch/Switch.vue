<template>
  <label :class="['Switch', 'Switch--' + VkPlatform]">
    <input type="checkbox" :disabled="disabled" :checked="checked" class="Switch__self"/>
    <span class="Switch__pseudo"/>
  </label>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>
