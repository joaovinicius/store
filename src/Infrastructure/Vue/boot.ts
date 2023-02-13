import { createSSRApp } from 'vue'
import { Quasar } from 'quasar'
import { App as IApp } from 'vue';
import App from './App.vue'
import router from './VueRouter'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'


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
    this.app.use(router)
    return this
  }

  build() {
    this.app.mount('#app')
  }
}