# VueJS VKUI
***This UI is currently under development, documentation will be later***

![](https://img.shields.io/npm/v/@globalart/vue-vkui.svg?colorA=57D9A3&colorB=666666)

## Installation and usage

```bash
$ yarn add @globalart/vue-vkui
# or
$ npm install @globalart/vue-vkui
```

## Usage

### Import everything

The minified stylesheet is roughly 200kb (~30kb gzipped). If this worries you, please see below how to import
only the components you require for a smaller bundle.

```javascript
// Wherever your Vue entrypoint is.
import VK from '@globalart/vue-vkui'
import '@globalart/vue-vkui/dist/vue-vkui.css'

Vue.use(VK, {
    theme: 'bright_light', // bright_light, space_gray. Default: bright_light
    platform: 'android' // ios, android.
})
```
