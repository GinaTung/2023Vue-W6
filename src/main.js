import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/all.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// 把axios作業 Vue套件使用
app.use(VueAxios, axios)

app.use(router)
app.mount('#app')
