<template>
  <VkDiv>
    <VkGroup header="Text">
      <VkCell>
        Compress Photo
        <template #after>
          <VkSwitch v-model="switch1" />
        </template>
      </VkCell>
      <VkCell>
        Compress Videos
        <template #after>
          <VkSwitch v-model="switch2" />
        </template>
      </VkCell>
    </VkGroup>
  </VkDiv>
</template>

<script>
export default {
  data: () => ({
    switch1: false,
    switch2: true
  })
}
</script>
