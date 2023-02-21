import { Module } from "vuex";
import { IRootState } from '../index'
import state, { IStoreState } from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const storeModule: Module<IStoreState, IRootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default storeModule