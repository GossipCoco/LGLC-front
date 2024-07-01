import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from "./store"
import Vue3YouTube from 'vue3-youtube';
import io from 'socket.io-client'
import IOController from '../src/api/SocketIoApi'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCat, faEnvelope, faGamepad, faHome, faHouseUser, faUser, faUserAlt, faUserCog,
        faUsers, faBurger, faBook, faGear, faChevronDown, faStar, faUserSecret
        } from '@fortawesome/free-solid-svg-icons'
import 'jquery/dist/jquery'
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/Base.css'
import './assets/css/layout.css'
import './assets/css/navbar.css'
import './assets/css/components.css'
import './assets/css/Pagination.css'
import './assets/css/card.css'
import './assets/css/text.css'
import './assets/css/FictionChapter.css'
import './assets/css/signInRegister.css'
import './assets/css/responsive.css'
import './assets/css/Accueil.css'
import './assets/css/Form.css'
import './assets/css/Scheduler.css'
import './assets/css/Parallax.css'

IOController.initSocket(io)

library.add(faUserSecret,faUser, faHouseUser, faGamepad, faUser, faHome, faEnvelope,
            faUserCog, faCat, faUserAlt, faUsers, faCat, faBurger, faBook,
            faGear, faChevronDown, faStar)

const app = createApp(App)
app.component('QuillEditor', QuillEditor)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(Vuex)
app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.use(Vue3YouTube)
app.mount('#app')