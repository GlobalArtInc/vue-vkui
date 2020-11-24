<template>
  <div>
    <router-link :to="`/blocks/${item.title.toLowerCase()}`" :key="item.title" v-for="item in items">
      <VkButton style="margin-left: 12px; margin-top: 6px">
        {{ item.title }}
      </VkButton>
    </router-link>
    <div style="border-bottom: 1px solid #000;margin-top: 6px" />
    <router-view/>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Button'
      },
      {
        title: 'Icon-Button'
      },
      {
        title: 'Card'
      },
      {
        title: 'Card-Grid'
      },
      {
        title: 'Card-Scroll'
      },
      {
        title: 'Content-Card'
      },
      {
        title: 'Div'
      },
      {
        title: 'Link'
      },
      {
        title: 'Header'
      },
      {
        title: 'Group'
      },
      {
        title: 'Gradient'
      },
      {
        title: 'Simple-Cell'
      },
      {
        title: 'Cell'
      },
      {
        title: 'Cell-Button'
      },
      {
        title: 'Rich-Cell'
      },
      {
        title: 'Horizontal-Cell'
      },
      {
        title: 'List'
      },
      {
        title: 'Footer'
      },
      {
        title: 'Spinner'
      },
      {
        title: 'Switch'
      },
      {
        title: 'Info-Row'
      },
      {
        title: 'Avatar'
      },
      {
        title: 'Progress'
      },
      {
        title: 'Search'
      },
      {
        title: 'Tabs'
      },
      {
        title: 'Tabs-Item'
      },
      {
        title: 'Tooltip'
      },
      {
        title: 'Pull-to-Refresh'
      },
      {
        title: 'Counter'
      },
      {
        title: 'Users-Stack'
      },
      {
        title: 'Separator'
      },
      {
        title: 'Placeholder'
      },
      {
        title: 'Banner'
      },
      {
        title: 'MiniInfoCell'
      },
      {
        title: 'Write-Bar'
      },
      {
        title: 'Write-Bar-Icon'
      }
    ]
  })
}
</script>
