import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// scroll to
import VueScrollTo from 'vue-scrollto'
// particles
import Particles from 'particles.vue'
// typed-js
import VueTypedJs from 'vue-typed-js'
// aos
import AOS from 'aos'
import 'aos/dist/aos.css'
// 網頁程式碼 codemirror
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

import Lottie from 'vue-lottie'

import './assets/scss/style.scss'

import { faLaptopCode, faPenFancy, faLanguage, faGraduationCap, faChevronUp, faChild, faLink } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faFolder } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
Vue.component('lottie', Lottie)
library.add(faGithub, faCss3Alt, faLaptopCode, faPenFancy, faLanguage, faGraduationCap, faChevronUp, faEnvelope, faChild, faLink, faFolder)

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('lottie', Lottie)

Vue.use(VueCodemirror)
Vue.use(VueScrollTo)
Vue.use(Particles)
Vue.use(VueTypedJs)

AOS.init()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
