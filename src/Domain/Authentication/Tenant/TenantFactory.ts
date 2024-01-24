import { BranchFactory } from '../Branch'
import { OrgFactory } from '../Org'
import { Tenant } from './Tenant'

export function TenantFactory (
  id = '',
  hostname = '',
  dbname = '',
  org = OrgFactory(),
  branch= [BranchFactory()]
): Tenant {
  return new Tenant({ 
    id,
    hostname,
    dbname,
    org,
    branch
   })
}

