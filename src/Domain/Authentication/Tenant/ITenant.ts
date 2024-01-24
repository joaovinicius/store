import { IBranch } from "../Branch"
import { IOrg } from "../Org"

export interface ITenant {
  id: string,
  hostname: string,
  dbname: string,
  org: IOrg,
  branch: IBranch[]
}
