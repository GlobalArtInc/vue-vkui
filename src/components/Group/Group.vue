<template>
  <section :class="['Group', 'Group--' + VkPlatform]">
    <div class="Group__inner">
      <VkHeader mode="secondary">
        <template>
          {{ header }}
        </template>
      </VkHeader>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: ''
    }
  }
}
</script>
