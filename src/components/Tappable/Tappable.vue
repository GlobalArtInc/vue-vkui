<template>
  <div :class="[
    classObj,
    ...getClass]"
       @mouseleave.prevent="onActive(false)"
       @mousedown.prevent="active = true" @click="onClick">
    <slot />
    <span v-if="!getClass" class="Tappable__waves">
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
    disabled: {
      type: Boolean,
      default: false
    },
    getClass: {
      type: Array
    }
  },
  methods: {
    onActive (state) {
      if (state === false) {
        setTimeout(() => {
          this.active = false
        }, 300)
      }
    },
    onClick () {
      this.$emit('click', event)
      this.active = true
      let timeout = setTimeout(() => {
        this.active = false
        clearTimeout(timeout)
      }, 750)
    }
  },
  computed: {
    classObj () {
      let arr = Object
        .keys(this.getClass)
        .map(key => this.getClass[key])
      if (this.disabled === false || arr[0] !== 'SimpleCell') {
        const classes = {}
        classes['Tappable'] = true
        classes['Tappable--' + this.VkPlatform] = true
        if (this.active === true) {
          classes['Tappable--active'] = true
        } else {
          classes['Tappable--inactive'] = true
        }
        return classes
      }
      return {}
    }
  }
}
</script>
