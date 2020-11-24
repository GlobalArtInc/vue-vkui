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
      console.log(2)
    }
  }
}
</script>
