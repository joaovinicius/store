import { IAdmin } from "src/Domain/Aggregate"
import { IAddress } from "src/Domain/Entity"

export interface IBranch {
  id: string,
  name: string,
  address?: IAddress,
  admin?: IAdmin,
  ein: string,
  companyName: string
}