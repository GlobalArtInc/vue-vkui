<template>
  <div>
    <VkDiv>
      <VkButton :style="[{marginRight: '8px'}]">
        Primary
      </VkButton>
    </VkDiv>
    <VkDiv>
      <VkButton mode="secondary" :style="[{marginRight: '8px'}]">
        Secondary
      </VkButton>
    </VkDiv>
    <VkDiv>
      <VkButton mode="tertiary" :style="[{marginRight: '8px'}]">
        Tertiary
      </VkButton>
    </VkDiv>
    <VkDiv>
      <VkButton mode="outline" :style="[{marginRight: '8px'}]">
        Outline
      </VkButton>
    </VkDiv>
    <VkDiv>
      <VkButton mode="commerce" :style="[{marginRight: '8px'}]">
        Commerce
      </VkButton>
    </VkDiv>
    <VkDiv>
      <VkButton mode="destructive">
        Destructive
      </VkButton>
    </VkDiv>
    <VkDiv style="background: rgb(35, 35, 35);">
      <VkButton mode="overlay_primary">
        Overlay Primary
      </VkButton>
    </VkDiv>
    <VkDiv style="background: rgb(35, 35, 35);">
      <VkButton mode="overlay_secondary">
        Overlay Secondary
      </VkButton>
    </VkDiv>
    <VkDiv style="background: rgb(35, 35, 35);">
      <VkButton mode="overlay_outline">
        Overlay Outline
      </VkButton>
    </VkDiv>
  </div>
</template>
