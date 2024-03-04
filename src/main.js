import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/css/index.css'
import { MotionPlugin } from '@vueuse/motion'
createApp(App).use(router).use(MotionPlugin).mount('#app')
