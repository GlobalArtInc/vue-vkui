<template>
  <VkPopoutRoot>
    <VkPanelHeader>
      <template #default>
        {{ $route.meta.title }}
      </template>
    </VkPanelHeader>
    <VkDiv class="App">
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

<style>
.App {
  width: 50%;
  margin: 0 auto;
}

@media screen and (max-width: 600px) {
  .App {
    width: 100%;
  }
}
</style>
