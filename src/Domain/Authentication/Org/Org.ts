import { IAdmin } from 'src/Domain/Aggregate';
import { IAddress } from './../../Entity/Address/IAddress';
import { IOrg } from './IOrg'

export class Org implements IOrg {
 public id?: number
 public name: string
 public address: IAddress
 public admin: IAdmin
 public ein: string
 public companyName: string

  constructor (props: IOrg) {
    this.id = props.id
    this.name = props.name
    this.address = props.address
    this.admin = props.admin
    this.ein = props.ein
    this.companyName = props.companyName

  }
}
