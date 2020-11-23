<template>
  <div>
    <VkCell>
      Switch
      <template #after>
        <VkSwitch />
      </template>
    </VkCell>
    <VkCell>
      Checked
      <template #after>
        <VkSwitch checked />
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
