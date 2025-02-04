import './assets/sass/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Prism from 'prismjs'

Prism.manual = true

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
