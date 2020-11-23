<template>
  <VkRoot>
    <VkPanelHeader/>
    <VkDiv>
      <VkAvatar :size="72" src="https://sun9-34.userapi.com/c857132/v857132690/49628/r4wBoWw0mJI.jpg?ava=1" mode="default" />
      <!--<VkInfoRow header="sss">
        <VkProgress :value="10"/>
      </VkInfoRow>
      <VkSpinner size="large" v-if="isLoading === true"/> -->
    </VkDiv>
  </VkRoot>
  <!--<VkSplitLayout>
    <template v-slot:header>
      <VkPanelHeader/>
    </template>
    <VkDiv>
      <VkInfoRow header="sss">
        <VkProgress :value="10"/>
      </VkInfoRow>
      <VkSpinner size="large" v-if="isLoading === true"/>
    </VkDiv>
  </VkSplitLayout> -->
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
