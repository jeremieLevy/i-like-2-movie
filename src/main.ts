import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { VueQueryPlugin } from '@tanstack/vue-query'

import { createI18n } from 'vue-i18n'

import router from './router'

import './style.css'


const app = createApp(App)
const pinia = createPinia()
const i18n = createI18n({
    legacy: false,
    locale: "en", 
    fallbackLocale: "fr",
})


app.use(pinia)
pinia.use(piniaPluginPersistedstate)

app.use(VueQueryPlugin)

app.use(i18n)

app.use(router)

app.mount('#app')

