import faker from 'faker'       
import { IOrg, Org } from 'src/Domain/Authentication/Org';
import { mock as Admin } from '../Aggregate/Admin';
import { mock as Address } from '../Entity/Address';

export const mock: IOrg = new Org({
    id: faker.lorem.sentence(),
    name: faker.name.firstName(),
    address: Address,
    admin: Admin,
    ein: faker.lorem.sentence(),
    companyName: faker.name.findName()

})