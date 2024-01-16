import { IAddress } from 'src/Domain/Entity'
import { IBranch } from './IBranch'
import { IAdmin } from 'src/Domain/Aggregate'

export class Branch implements IBranch {
 public id: string
 public name: string
 public address?: IAddress
 public admin?: IAdmin
 public ein: string
 public companyName: string

  constructor (props: IBranch) {
    this.id = props.id
    this.name = props.name
    this.address = props.address
    this.admin = props.admin
    this.ein = props.ein
    this.companyName = props.companyName
  }
}
