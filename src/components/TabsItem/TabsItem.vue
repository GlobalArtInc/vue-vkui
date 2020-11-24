<template>
  <VkTappable :class="['TabsItem', 'TabsItem--' + VkPlatform, selected === true ? 'TabsItem--selected' : '']">
    <div class="TabsItem__in">
      <slot />
    </div>
    <div class="TabsItem__after">
      <slot name="after" />
    </div>
  </VkTappable>
</template>

<script>
export default {
  props: {
    selected: {
      default: false
    }
  }
}
</script>
