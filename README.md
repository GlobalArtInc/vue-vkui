# VueJS VKUI
***This UI is currently under development, documentation will be later***

![](https://img.shields.io/npm/v/@globalart/vue-vkui.svg?colorA=57D9A3&colorB=666666)

## Установка и использование

```bash
$ yarn add @globalart/vue-vkui
# или
$ npm install @globalart/vue-vkui
```

## Использование
```javascript
// В точку загрузки VueJS
import VK from '@globalart/vue-vkui'
import '@globalart/vue-vkui/dist/vue-vkui.css'

Vue.use(VK, {
    theme: 'bright_light', // bright_light, space_gray. Default: bright_light
    platform: 'android' // ios, android.
})
```

## Браузеры
На данный момент мы поддерживаем webview следующих операционных систем:
* android >= 4.4
* ios >= 9

Иными словами, мы поддерживаем браузеры следующих версий:
* Safari для iOS >= 9
* Android Browser >= 4.4 (Chrome 30)
* Chrome для Android, начиная с Android 5.0 (Chrome 36)

### vk.com и m.vk.com
Сейчас библиотека не гарантирует стабильную работу при интеграции в [vk.com](vk.com) и [m.vk.com](m.vk.com). В vk.com есть нерешенные проблемы с элементами ввода типа клавиатуры и мышки. В m.vk.com есть несоответствия в списках поддерживаемых браузеров.
