import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import './style.css'
import router from './router'
import App from './App.vue'


const app = createApp(App)

app.use(VueQueryPlugin)

app.use(router)
app.mount('#app')
