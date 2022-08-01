import faker from 'faker'
import { IBuy } from '../../../../../src/Domain/Entity/Buy/IBuy'
import { Buy } from '../../../../../src/Domain/Entity/Buy/Buy'
import { SupplierFactory } from '../../../../../src/Domain/Entity/Supplier/SupplierFactory'
const now = new Date()

export const mock: IBuy = new Buy({
  id: faker.datatype.uuid(),
  invoice: 0,
  totalPaid: 0,
  costOfFreight: 0,
  requestDate: now,
  deliveryDate: now,
  supplier: SupplierFactory(),
  createdAt: now,
  updatedAt: now
})
