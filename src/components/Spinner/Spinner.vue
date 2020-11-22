<template>
  <div class="Spinner">
    <img v-if="spinner_size === 'large'" class="Spinner__self" src="../../icons/44/spinner_44.svg" alt=""/>
    <img v-else-if="spinner_size === 'medium'" class="Spinner__self" src="../../icons/32/spinner_32.svg" alt=""/>
    <img v-else-if="spinner_size === 'small'" class="Spinner__self" src="../../icons/16/spinner_16.svg" alt=""/>
    <img v-else class="Spinner__self" src="../../icons/24/spinner_24.svg" alt=""/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      spinner_size: ''
    }
  },
  props: {
    size: {
      default: 'regular'
    }
  },
  created () {
    setTimeout(() => {
      this.spinner_size = this.size
    })
  }
}
</script>

<style>
.Spinner__self {
  pointer-events: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
