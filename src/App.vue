<template>
  <Root>
    <PanelHeader />
    <Spinner size="large" v-if="isLoading === true" />
  </Root>
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
