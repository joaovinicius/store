import { Supplier } from "./Supplier";

export interface Buy {
  id?: string,
  invoice?: number,
  totalPaid: number,
  costOfFreight: number,
  requestDate: string,
  deliveryDate: string,
  createdAt: string,
  updatedAt: string,
  supplier: Supplier,
}
