import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

export default class Boot {
  constructor() {
    this.app = createApp(App);
  }

  setConfig() {
    this.app.use(Quasar, {
      plugins: {} // import Quasar plugins and add here
    })
    return this
  }

  setRoutes() {
    return this
  }

  build() {
    this.app.mount('#app')
  }
}