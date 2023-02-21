import { IStoreState } from './state'

export default {
  SET_RULES: (
    state: IStoreState,
    payload: []
  ) => state.categories = payload
}