<template>
  <div>
    <VkDiv>
      <VkButton @click="onSnackbar">
        Primary
      </VkButton>
    </VkDiv>
  </div>
</template>

<script>
export default {
  methods: {
    onSnackbar () {
      this.snackbar.danger({
        title: 'Danger',
        message: 'Dev Snack',
        duration: 3000
      })
    }
  }
}
</script>
