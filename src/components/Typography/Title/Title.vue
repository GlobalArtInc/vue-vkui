<template>
  <h1 :class="classes" v-if="level === '1'">
    <slot/>
  </h1>
  <h2 :class="classes" v-else-if="level === '2'">
    <slot/>
  </h2>
  <h3 :class="classes" v-else-if="level === '3'">
    <slot/>
  </h3>
</template>

<script>
export default {
  data: () => ({
    classes: ['Title']
  }),
  props: {
    weight: {
      type: String,
      default: 'heavy',
      required: true
    },
    level: {
      type: String,
      required: true
    }
  },
  methods: {
    getAndroidTitleWeight (level, weight) {
      if (level === 3) {
        return weight === 'regular' ? weight : 'medium'
      }

      if (level === 2 && weight === 'semibold') {
        return 'medium'
      }

      if (weight === 'heavy') {
        return 'bold'
      }

      return weight
    }
  },
  created () {
    this.classes.push('Title--' + this.VkPlatform)

    if (this.VkPlatform === 'android') {
      this.classes.push('Title--w-' + this.getAndroidTitleWeight(this.level, this.weight))
    } else {
      this.classes.push('Title--w-' + this.weight)
    }
    this.classes.push('Title--l-' + this.level)
  }
}
</script>
