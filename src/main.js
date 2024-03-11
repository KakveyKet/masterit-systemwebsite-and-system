import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/css/index.css'
import { MotionPlugin } from '@vueuse/motion'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'primevue/resources/themes/aura-light-green/theme.css'
import PrimeVue from 'primevue/config';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import { library } from '@fortawesome/fontawesome-svg-core'
import { createNotivue } from 'notivue';
import 'notivue/notifications.css'
import 'notivue/animations.css'
import { faUserSecret, faMask, faCircleQuestion, faHandshakeSimple, faCircleInfo, faFilter, faBullhorn, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret, faMask, faCircleQuestion, faHandshakeSimple, faCircleInfo, faFilter, faBullhorn, faTrash, faPenToSquare)


let app = createApp(App);
const notivue = createNotivue({
    position: 'top-center',
    limit: 1,
    enqueue: false,
    notifications: {
        global: {
            duration: 2000
        }
    }
})
app.use(router);
app.use(MotionPlugin);
app.use(PrimeVue);
app.use(notivue)
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.mount('#app');
