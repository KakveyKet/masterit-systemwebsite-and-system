import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/css/index.css'
import { MotionPlugin } from '@vueuse/motion'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PrimeVue from 'primevue/config';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faMask, faCircleQuestion, faHandshakeSimple, faCircleInfo, faFilter, faBullhorn } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret, faMask, faCircleQuestion, faHandshakeSimple, faCircleInfo, faFilter, faBullhorn)


createApp(App).use(router).use(MotionPlugin).use(PrimeVue).component('font-awesome-icon', FontAwesomeIcon).mount('#app')