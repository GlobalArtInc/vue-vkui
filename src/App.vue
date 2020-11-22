<template>
  <Root>
    <PanelHeader>
      <template v-slot:left>
        asd
      </template>
      {{ VKTheme }}
      <template v-slot:right>
        asd
      </template>
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
