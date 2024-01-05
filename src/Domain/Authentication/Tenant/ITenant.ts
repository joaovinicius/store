import { IBranch } from "../Branch"
import { IOrg } from "../Org"

export interface ITenant {
  hostname: string,
  dbname: string,
  org: IOrg,
  branch: IBranch[]
}
