<template>
  <VkRoot>
    <VkPanelHeader/>
    <VkDiv>
      <VkInfoRow header="sss">
        <VkProgress :value="10"/>
      </VkInfoRow>
      <VkSpinner size="large" v-if="isLoading === true"/>
    </VkDiv>
  </VkRoot>
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
