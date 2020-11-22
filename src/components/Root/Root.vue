<template>
  <div :class="`PopoutRoot SplitLayout`">
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
