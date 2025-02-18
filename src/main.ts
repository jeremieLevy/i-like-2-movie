import { createApp } from 'vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { VueQueryPlugin } from '@tanstack/vue-query'

import './style.css'
import router from './router'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

pinia.use(piniaPluginPersistedstate)

app.use(pinia)

app.use(VueQueryPlugin)

app.use(router)

app.mount('#app')
