import faker from 'faker'
import { ITenant, Tenant } from 'src/Domain/Authentication/Tenant'
import { mock as Org } from './Org'
import { mock as Branch} from '../Authentication/Branch'


export const mock: ITenant = new Tenant({
    id: faker.lorem.sentence(),
    hostname: faker.internet.url(),
    dbname: faker.lorem.slug(),
    org: Org,
    branch: [Branch]
})