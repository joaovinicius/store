export interface IAdminState {
  rules: string[]
}

const state = (): IAdminState => ({
  rules: []
})

export default state