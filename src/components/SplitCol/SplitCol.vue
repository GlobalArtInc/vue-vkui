<template>
  <div :class="['SplitCol',
   'SplitCol--' + VkPlatform,
    this.spaced ? 'SplitCol--spaced' : '',
    this.fixed ? 'SplitCol--fixed' : '']"
       :style="[{width: width, minWidth: minWidth, maxWidth: maxWidth}]">
    <slot/>
  </div>
</template>

<script>
export default {
  data: () => ({
    style: '',
    classes: ['SplitCol']
  }),
  props: {
    width: {
      type: String
    },
    maxWidth: {
      type: String
    },
    minWidth: {
      type: String
    },
    animate: {
      type: Boolean
    },
    spaced: {
      type: Boolean
    },
    fixed: {
      type: Boolean
    }
  }
}
</script>
