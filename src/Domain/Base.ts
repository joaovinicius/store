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

export interface ISoftDeletes {
  deletedAt?: Date
}

export class SoftDeletes {
  public deletedAt?: Date

  constructor (props: ISoftDeletes) {
    this.deletedAt = props.deletedAt
  }
}

export interface ITimestampsAndSoftDeletes extends ITimestamps,
ISoftDeletes {}

export class TimestampsAndSoftDeletes extends Timestamps implements ITimestampsAndSoftDeletes {
  public deletedAt?: Date

  constructor (props: ITimestampsAndSoftDeletes) {
    super(props)
    this.deletedAt = props.deletedAt
  }
}
