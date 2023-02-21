import { Module } from "vuex";
import { IRootState } from '../index'
import state, { IAuthenticationState } from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const authenticationModule: Module<IAuthenticationState, IRootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default authenticationModule