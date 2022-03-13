import { Billing } from "../Entity/Billing";
import { Cart } from "./Cart";

export interface Purchase extends Cart {
  billing: Billing
}
