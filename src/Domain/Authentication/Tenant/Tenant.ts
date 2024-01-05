import { ITenant } from './ITenant'
import { IOrg } from '../Org';
import { IBranch } from '../Branch';

export class Tenant implements ITenant {
  public hostname: string
  public dbname: string
  public org: IOrg
  public branch: IBranch[]

  constructor (props: ITenant) {
    this.hostname = props.hostname
    this.dbname = props.dbname
    this.org = props.org
    this.branch = props.branch
    }
}
