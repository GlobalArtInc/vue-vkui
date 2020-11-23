<template>
  <div :class="classes">
    <div class="Avatar__in" :style="`width: ${size}px; height: ${size}px`">
      <img class="Avatar__img" :src="src" :style="`border-radius: ${borderRadius}`"/>
      <span class="Avatar__shadow" :style="`border-radius: ${borderRadius}`" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    classes: ['Avatar'],
    borderRadius: ''
  }),
  props: {
    size: {
      type: Number,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      default: 'default',
      required: true
    },
    shadow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    Border () {
      switch (this.mode) {
        case 'default':
          this.borderRadius = '50%'
          return '50%'
        case 'image':
          this.borderRadius = 4
          return 4
        case 'app':
          this.borderRadius = Math.floor(this.size * 10 / 48)
          return Math.floor(this.size * 10 / 48)
      }
    }
  },
  created () {
    this.Border()
    this.classes.push('Avatar--' + this.VkPlatform)
    this.classes.push('Avatar--type-' + this.mode)
    this.classes.push('Avatar--sz-' + this.size)
  }
}
</script>
