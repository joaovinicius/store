import { Module } from "vuex";
import { IRootState } from '../index'
import state, { IAdminState } from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const adminModule: Module<IAdminState, IRootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default adminModule