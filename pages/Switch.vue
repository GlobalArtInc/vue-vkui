<template>
  <div>
    <VkCell>
      Переключатель
      <template #after>
        <VkSwitch />
      </template>
    </VkCell>
    <VkCell>
      Активный
      <template #after>
        <VkSwitch checked />
      </template>
    </VkCell>
    <VkCell>
      Отключенный
      <template #after>
        <VkSwitch disabled />
      </template>
    </VkCell>
  </div>
</template>
