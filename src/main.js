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
  { path: '/', component: () => import('../pages/Home'), meta: { title: 'Home' } },
  {
    path: '/blocks',
    component: () => import('../pages/Layout'),
    children: [
      { path: 'button', component: () => import('../pages/Button'), meta: { title: 'Buttons' } },
      { path: 'switch', component: () => import('../pages/Switch'), meta: { title: 'Switch' } }
    ]
  }
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
