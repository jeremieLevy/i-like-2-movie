import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { VueQueryPlugin } from '@tanstack/vue-query'

import { i18n } from './plugins/i18n'

import router from './router'

import './style.css'


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
pinia.use(piniaPluginPersistedstate)

app.use(VueQueryPlugin)

app.use(i18n)

app.use(router)

app.mount('#app')

