import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import VK from './index'

/*
  themes: bright_light, space_gray
 */

Vue.use(VK, {
  theme: 'bright_light',
  platform: 'ios'
})
Vue.use(VueRouter)

const routes = [
  { path: '/', component: App, meta: { title: 'VK UI' } }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
