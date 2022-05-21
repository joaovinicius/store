
export interface ISoftDeletes {
  deletedAt?: Date
}

export class SoftDeletes {
  public deletedAt?: Date

  constructor (props: ISoftDeletes) {
    this.deletedAt = props.deletedAt
  }
}
