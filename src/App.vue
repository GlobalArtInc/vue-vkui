<template>
  <Root>
    <PanelHeader>
      <FixedLayout>
        <PanelHeader :side="true" />
      </FixedLayout>
    </PanelHeader>
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
