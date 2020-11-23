<template>
  <div :class="['Cell', 'Cell--' + VkPlatform]">
    <div class="Cell_in">
      <VkSimpleCell>
        <slot />
        <template #after>
          <slot name="after" />
        </template>
      </VkSimpleCell>
    </div>
  </div>
</template>
