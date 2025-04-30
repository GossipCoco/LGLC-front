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
        faUsers, faBurger, faBook, faGear, faChevronDown, faStar, faUserSecret,
        faPen
        } from '@fortawesome/free-solid-svg-icons'
import 'jquery/dist/jquery'
import 'popper.js/dist/umd/popper.min.js'
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './assets/css/Base/Base.css'
import './assets/css/Base/Utilities.css'
import './assets/css/Base/TextUtilities.css'
import './assets/css/Base/Color.css'
import './assets/css/Base/HeightWidth.css'
import './assets/css/Base/Padding-Margin.css'
import './assets/css/Base/Border.css'
import './assets/css/Base/Layout.css'
import './assets/css/Base/Navbar.css'
import './assets/css/Base/Pagination.css'
import './assets/css/Base/Card.css'
import './assets/css/Base/Text.css'
import './assets/css/Page/Login.css'
import './assets/css/Page/SignInRegister.css'
import './assets/css/Page/Accueil.css'
import './assets/css/Components/Components.css'
import './assets/css/Components/Fiction.css'
import './assets/css/Components/FictionChapter.css'
import './assets/css/Components/Form.css'
import './assets/css/Components/Scheduler.css'
import './assets/css/Components/Parallax.css'
import './assets/css/Components/Comment.css'
import './assets/css/Components/Game.css'
import './assets/css/Components/Dice.css'
import './assets/css/Components/Timeline.css'
import './assets/css/Base/Responsive.css'
import './assets/css/Base/Responsive-Mobile.css'

IOController.initSocket(io)

library.add(faUserSecret,faUser, faHouseUser, faGamepad, faUser, faHome, faEnvelope,
            faUserCog, faCat, faUserAlt, faUsers, faCat, faBurger, faBook,
            faGear, faChevronDown, faStar, faPen)

const app = createApp(App)
app.component('QuillEditor', QuillEditor)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(Vuex)
app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.use(Vue3YouTube)
app.mount('#app')