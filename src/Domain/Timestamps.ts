export interface ITimestamps {
  createdAt: Date,
  updatedAt: Date
}

export class Timestamps {
  public createdAt: Date
  public updatedAt: Date

  constructor (props: ITimestamps) {
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
  }
}
