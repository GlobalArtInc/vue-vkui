<template>
  <div :class="`Spinner Spinner--${VkPlatform}`" style="margin-top: 20px;">
    <div v-if="size === 'large'" :class="getClass(44)" :style="setStyle(44)">
      <Spinner44/>
    </div>
    <div v-else-if="size === 'medium'" :class="getClass(32)" :style="setStyle(32)">
      <Spinner32/>
    </div>
    <div v-else-if="size === 'small'" :class="getClass(16)" :style="setStyle(16)">
      <Spinner16/>
    </div>
    <div v-else :class="getClass(24)" :style="setStyle(24)">
      <Spinner24/>
    </div>
  </div>
</template>

<script>
import Spinner44 from '../../icons/44/spinner_44.svg'
import Spinner32 from '../../icons/32/spinner_32.svg'
import Spinner16 from '../../icons/16/spinner_16.svg'
import Spinner24 from '../../icons/24/spinner_24.svg'

export default {
  props: {
    size: {
      default: 'regular'
    }
  },
  components: {
    Spinner44,
    Spinner32,
    Spinner16,
    Spinner24
  },
  methods: {
    getClass (size) {
      return `Icon Icon--${size} Icon--w-${size} Icon--h-${size} Icon--spinner_${size} Spinner__self`
    },
    setStyle (size) {
      return `width: ${size}px; height: ${size}px;`
    }
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
