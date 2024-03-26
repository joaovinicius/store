import { type AxiosInstance } from 'axios'
import { type Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance
    $store: Store
  }
}

declare module '*.vue' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}
