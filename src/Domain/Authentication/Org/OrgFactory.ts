import { AddressFactory } from 'src/Domain/Entity';
import { Org } from './Org';
import { AdminFactory } from 'src/Domain/Aggregate';

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

