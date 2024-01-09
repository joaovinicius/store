
import faker from 'faker'
import { Branch, IBranch } from "src/Domain/Authentication/Branch";
import { mock as Admin } from '../Aggregate/Admin';
import { mock as Address } from '../Entity/Address';


export const mock: IBranch = new Branch({
    id: faker.random.uuid(),
    name: faker.name.firstName(),
    address: Address,
    admin: Admin,
    ein: faker.lorem.sentence(),
    companyName: faker.lorem.sentences()
})