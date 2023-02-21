import { createStore } from 'vuex'
import authentication from './authentication'
import admin from './admin'
import store from './store'

export interface IRootState  {
  count: number,
}

// Create a new store instance.
const vuexStore = createStore<IRootState>({
  modules: {
    authentication,
    admin,
    store
  },
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
})

export default vuexStore