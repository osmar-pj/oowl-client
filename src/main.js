import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import io from 'socket.io-client'
import './assets/scss/app.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDoorOpen, faDoorClosed, faUserSlash, faUser, faGasPump } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faDoorOpen, faDoorClosed, faUserSlash, faUser, faGasPump)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Buefy)

Vue.prototype.$socket = io(`http://localhost:4000`)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
