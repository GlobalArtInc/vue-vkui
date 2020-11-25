<template>
  <div :class="['Cell', 'Cell--' + VkPlatform, 'Cell--m']">
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
