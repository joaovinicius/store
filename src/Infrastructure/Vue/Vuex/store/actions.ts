import { ActionTree } from 'vuex'
import { IStoreState } from './state'
import { IRootState } from '../index'

const actions: ActionTree<IStoreState, IRootState> = {
  async setCategories({ commit }, payload) {
    commit('SET_CATEGORIES', payload)
  }
}

export default actions