import { ActionTree } from 'vuex'
import { IAuthenticationState } from './state'
import { IRootState } from '../index'

const actions: ActionTree<IAuthenticationState, IRootState> = {
  async setUser({commit}, payload) {
    commit('SET_USER', payload)
  }
}

export default actions