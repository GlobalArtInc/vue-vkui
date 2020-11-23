<template>
  <h5 :class="`Subhead Subhead--${VkPlatform} Subhead--w-${weight} InfoRow__header`"><slot /></h5>
</template>

<script>
export default {
  props: {
    weight: {
      type: String,
      default: 'regular',
      required: true
    }
  }
}
</script>
