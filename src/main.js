import { createApp } from 'vue'
import {createPinia} from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import 'primeicons/primeicons.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const myApp = createApp(App)


myApp.use(pinia).use(router).mount('#app')
