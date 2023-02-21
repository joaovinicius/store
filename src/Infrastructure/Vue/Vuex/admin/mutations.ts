import { IAdminState } from './state'

export default {
  SET_RULES: (
    state: IAdminState,
    payload: string[]
  ) => state.rules = payload
}