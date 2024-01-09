import { AddressFactory  } from 'src/Domain/Entity'
import { Branch } from './Branch'
import { AdminFactory } from 'src/Domain/Aggregate'

export function BranchFactory (
  id = '',
  name = '',
  address = AddressFactory(),
  admin = AdminFactory(),
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

