import { IAuthenticationState } from './state'

const getters = {
  user: (state: IAuthenticationState) => state.user
}

export default getters