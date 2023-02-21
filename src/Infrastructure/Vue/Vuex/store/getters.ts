import { IStoreState } from './state'

const getters = {
  categories: (state: IStoreState) => state.categories
}

export default getters