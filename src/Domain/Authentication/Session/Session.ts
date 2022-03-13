import { ISession } from './ISession'

export class Session implements ISession {
  public readonly authorization: string

  constructor (props: ISession) {
    this.authorization = props.authorization
  }
}
