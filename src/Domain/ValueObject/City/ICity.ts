import { IState } from '../State'

export interface ICity {
  id: string
  name: string
  state?: IState
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}
