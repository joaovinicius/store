import { Admin } from "../Aggregate/Admin";

export interface Coupon {
  id?: string,
  code: string,
  discount: number,
  limit?: number,
  startDate: Date,
  endDate: Date,
  isActive: boolean,
  createdAt: string,
  updatedAt: string,
  createdBy: Admin
}
