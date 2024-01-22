import { AddressFactory } from 'src/Domain/Entity/Address/AddressFactory';
import { Org } from './Org';
import { AdminFactory } from 'src/Domain/Aggregate/Admin/AdminFactory';

export function OrgFactory (
  id = '',
  name = '',
  address = AddressFactory(),
  admin = AdminFactory() ,
  ein = '',
  companyName = ''
): Org {
  return new Org({ 
    id,
    name,
    address,
    admin,
    ein,
    companyName
   })
}

