import { IAdmin } from "src/Domain/Aggregate"
import { IAddress } from "src/Domain/Entity"

export interface IOrg {
  id?: number,
  name: string,
  address: IAddress,
  admin: IAdmin,
  ein: string,
  companyName: string
}
