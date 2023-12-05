import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from "./store"
import io from 'socket.io-client'
import IOController from '../src/api/SocketIoApi'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCat, faEnvelope, faGamepad, faHome, faHouseUser, faUser, faUserAlt, faUserCog, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'

import 'bootstrap/dist/css/bootstrap.css'

import './assets/css/layout.css'
import './assets/css/navbar.css'
import './assets/css/components.css'
import './assets/css/Pagination.css'
import './assets/css/card.css'
import './assets/css/text.css'
import './assets/css/signInRegister.css'


IOController.initSocket(io)

library.add(faUser, faHouseUser, faGamepad, faUser, faHome, faEnvelope, faUserCog, faCat, faUserAlt, faUsers, faCat)
const app = createApp(App)

app.use(FontAwesomeIcon)
app.use(Vuex)
app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
