import { IState } from '../State/IState'

export interface ICity {
  id: string,
  name: string,
  state: IState
}
