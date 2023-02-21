import { createSSRApp } from 'vue'
import { Quasar } from 'quasar'
import { App as IApp } from 'vue';
import App from './App.vue'
import router from './VueRouter'
import store from './Vuex'
import axios from './Plugins/axios'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const baseUrl = `${process.env.API_PROTOCOL}://${process.env.API_URL}:${process.env.API_PORT}`

export default class Boot {
  app: IApp<Element>;

  constructor() {
    this.app = createSSRApp(App);
  }

  setConfig() {
    this.app.use(Quasar, {
      plugins: {} // import Quasar plugins and add here
    })
    return this
  }

  setRoutes() {
    this.app.use(axios, { baseUrl })
    this.app.use(router)
    this.app.use(store)
    return this
  }

  build() {
    this.app.mount('#app')
  }
}