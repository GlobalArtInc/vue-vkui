<template>
  <div :class="[
    'Tappable',
    'Tappable--' + VkPlatform,
    active === true ? 'Tappable--active' : 'Tappable--inactive', ...getClass]" @click="onClick">
    <slot />
    <span class="Tappable__waves">
      <span class="Tappable__wave">
      </span>
    </span>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false
  }),
  props: {
    getClass: {
      type: Array
    }
  },
  methods: {
    onClick () {
      this.active = true
      let timeout = setTimeout(() => {
        this.active = false
        clearTimeout(timeout)
      }, 750)
    }
  },
  created () {
    this.active = false
  }
}
</script>
