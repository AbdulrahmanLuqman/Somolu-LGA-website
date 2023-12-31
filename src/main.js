import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import router from './router';


const app = createApp(App)

app.use(createPinia())
app.use(AOS.init());
app.use(router)
app.mount('#app')
