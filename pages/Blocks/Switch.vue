<template>
  <div>
    <VkCell>
      Switch
      <span :style="`color: ${switch1 === true ? 'blue':'red'}`">
        {{ switch1 }}
      </span>
      <template #after>
        <VkSwitch v-model="switch1" />
      </template>
    </VkCell>
    <VkCell>
      Checked
      <span :style="`color: ${switch2 === true ? 'blue':'red'}`">
        {{ switch2 }}
      </span>
      <template #after>
        <VkSwitch v-model="switch2"/>
      </template>
    </VkCell>
    <VkCell>
      Disabled
      <span :style="`color: ${switch3 === true ? 'blue':'red'}`">
        {{ switch3 }}
      </span>
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
