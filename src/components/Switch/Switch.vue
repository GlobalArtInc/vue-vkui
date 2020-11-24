<template>
  <label :class="['Switch', 'Switch--' + VkPlatform]">
    <input type="checkbox" @input="handleInput" :disabled="disabled" @click="onClick" class="Switch__self"/>
    <span class="Switch__pseudo"/>
  </label>
</template>

<script>
export default {
  data: () => ({
    data: false
  }),
  props: {
    value: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  created () {
    this.data = this.value
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.checked)
    },
    onClick () {
      this.$emit('click', event)
    }
  }
}
</script>
