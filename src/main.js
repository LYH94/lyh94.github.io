import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// scroll to
import VueScrollTo from 'vue-scrollto'
// Vue3Lottie
import Vue3Lottie from 'vue3-lottie'
// vue-loading-overlay
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
// aos
import AOS from 'aos'
import 'aos/dist/aos.css'
import { InstallCodeMirror } from "codemirror-editor-vue3";


import './assets/scss/style.scss'

import { faLaptopCode, faPenFancy, faLanguage, faGraduationCap, faChevronUp, faChild, faLink } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faFolder } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faCss3Alt } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faCss3Alt, faLaptopCode, faPenFancy, faLanguage, faGraduationCap, faChevronUp, faEnvelope, faChild, faLink, faFolder)

const app = createApp(App)

// Register components
app.component('font-awesome-icon', FontAwesomeIcon)

// Initialize AOS
AOS.init()

// Use plugins
app.use(router)
app.use(store)
app.use(VueScrollTo)
app.use(Vue3Lottie)
app.use(LoadingPlugin);
app.use(InstallCodeMirror);

app.mount('#app')