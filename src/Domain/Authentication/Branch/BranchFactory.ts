import { Branch } from './Branch'

export function BranchFactory (
  id = undefined,
  name = '',
  address = undefined,
  admin = undefined,
  ein = '',
  companyName = ''
): Branch {
  return new Branch({ 
    id,
    name,
    address,
    admin,
    ein,
    companyName
   })
}

