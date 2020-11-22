<template>
  <Root>
    <PanelHeader>
      sd
    </PanelHeader>
    <Spinner size="large" />
  </Root>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  },
  created () {
    setTimeout(() => {
      this.isLoading = true
    }, 500)
  }
}
</script>
