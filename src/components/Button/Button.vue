<template>
    <VkTappable @click="onClick" :getClass="[
   'Button',
   'Button--' + VkPlatform,
   'Button--aln-center',
   'Button--sz-' + size,
   'Button--lvl-' + mode]">
    <div class="Button__in">
      <div class="Button__before"><slot name="before" /></div>
      <div class="Button__content"><slot /></div>
      <div class="Button__after"><slot name="after" /></div>
    </div>
  </VkTappable>
</template>

<script>
export default {
  data: () => ({
    classes: ['Button']
  }),
  props: {
    mode: {
      type: String,
      default: 'primary'
      // primary | secondary | tertiary | outline | commerce | destructive | overlay_primary | overlay_secondary | overlay_outline
    },
    size: {
      type: String,
      default: 's'
    },
    stretched: {
      type: Boolean,
      default: false
    },
    stopPropagation: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick () {
      this.$emit('click', event)
    }
  }
}
</script>
