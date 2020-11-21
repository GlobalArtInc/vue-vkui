<template>
  <div :class="`PopoutRoot SplitLayout bright_${theme}`">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'light'
    }
  }
}
</script>
