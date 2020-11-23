<template>
  <Tappable :getClass="['SimpleCell', 'SimpleCell--' + VkPlatform, ...getClass]">
    <div class="SimpleCell__main">
      <div class="SimpleCell__children">
        <slot/>
      </div>
      <div v-if="description" class="SimpleCell__description">{{ description }}</div>
    </div>
    <div class="SimpleCell__after">
      <slot name="after"/>
    </div>
  </Tappable>
</template>

<script>
import Tappable from '@/components/Tappable/Tappable'

export default {
  components: { Tappable },
  props: {
    getClass: {
      type: Array
    },
    description: {
      type: String
    }
  }
}
</script>
