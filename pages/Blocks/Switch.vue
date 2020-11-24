<template>
  <div>
    <VkCell>
      Switch
      <template #after>
        <VkSwitch v-model="switch1" />
      </template>
    </VkCell>
    <VkCell>
      Checked
      <template #after>
        <VkSwitch v-model="switch2"/>
      </template>
    </VkCell>
    <VkCell>
      Disabled
      <template #after>
        <VkSwitch disabled />
      </template>
    </VkCell>
  </div>
</template>

<script>
export default {
  data: () => ({
    switch1: false,
    switch2: true,
    switch3: false
  })
}
</script>
