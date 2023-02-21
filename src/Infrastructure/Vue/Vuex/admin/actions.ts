import { ActionTree } from 'vuex'
import { IAdminState } from './state'
import { IRootState } from '../index'

const actions: ActionTree<IAdminState, IRootState> = {
  async setRules({ commit }, payload) {
    commit('SET_RULES', payload)
  }
}

export default actions