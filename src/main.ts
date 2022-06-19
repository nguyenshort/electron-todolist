import { createApp } from 'vue'
import App from './App.vue'
import './samples/node-api'
import './assets/tailwind.css'

import router from './routes'


// Pinna store
import { createPinia } from 'pinia'
import animejs from "./plugins/animejs";
const pinia = createPinia()

const app = createApp(App)
app.use(pinia)

app.use(router)
app.use(animejs)
app.mount('#app').$nextTick(window.removeLoading)

window.$vue = app
