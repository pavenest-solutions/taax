import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const app = createApp(App)

app.use(router).use(ElementPlus).mount('#app')