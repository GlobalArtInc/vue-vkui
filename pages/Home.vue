<template>
  <div>
    <VkCellButton mode="primary">
      asd
    </VkCellButton>
    <VkButton :style="[{marginRight: '8px'}]">
      Primary
    </VkButton>
    <VkButton mode="secondary" :style="[{marginRight: '8px'}]">
      Secondary
    </VkButton>
    <VkButton mode="commerce">
      Commerce
    </VkButton>
    <VkInfoRow header="sss">
      <VkProgress :value="10"/>
    </VkInfoRow>
    <VkSpinner size="large" v-if="isLoading === true"/>
  </div>
</template>
