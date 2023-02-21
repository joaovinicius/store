import { IAuthenticationState } from './state'

export default {
  SET_USER: (
    state: IAuthenticationState,
    payload: object | null
  ) => state.user = payload
}