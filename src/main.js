import App from './App.vue'
import { createApp } from 'vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router/routes.js'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

import {store} from './store'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
