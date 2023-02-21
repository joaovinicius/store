export interface IAuthenticationState {
  user: object | null
}

const state = (): IAuthenticationState => ({
  user: null,
})

export default state