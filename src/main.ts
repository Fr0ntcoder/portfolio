import AOS from 'aos'
import 'aos/dist/aos.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import { router } from './router'
import './style.css'

AOS.init()

const app = createApp(App)
app.use(createPinia())
app.use(VueScrollTo, {
	offset: -80
})

app.use(router)

app.mount('#app')
