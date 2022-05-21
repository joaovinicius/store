import { Admin } from '../../../Domain/Aggregate/Admin'
export interface Repository {
  requestUpdateEmail(from: string, body: Admin): Promise<boolean>,
  requestUpdatePermissions(from: string, body: Admin): Promise<boolean>,
  requestUpdateProfile(from: string, body: Admin): Promise<boolean>
}
