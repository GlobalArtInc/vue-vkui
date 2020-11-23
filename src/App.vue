<template>
  <VkPopoutRoot>
    <VkPanelHeader/>
    <VkDiv :style="{width: '50%', margin: '0 auto'}">
      <router-view/>
    </VkDiv>
  </VkPopoutRoot>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isLoading: true
    }
  },
  created () {
    setTimeout(() => {
      // this.isLoading = false
    }, 500)
  }
}
</script>
