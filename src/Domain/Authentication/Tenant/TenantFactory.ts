import { BranchFactory } from '../Branch'
import { OrgFactory } from '../Org'
import { Tenant } from './Tenant'

export function TenantFactory (
  hostname = '',
  dbname = '',
  org = OrgFactory(),
  branch= [BranchFactory()]
): Tenant {
  return new Tenant({ 
    hostname,
    dbname,
    org,
    branch
   })
}

