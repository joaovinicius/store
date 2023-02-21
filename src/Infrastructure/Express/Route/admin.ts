import { IRoute } from './IRoute'
import AdminMiddleware from '../Middleware/AdminMiddleware'
import DashboardControlller from '../Controller/Admin/DashboardControlller'

const PREFIX = 'admin'
const dashboardControlller = new DashboardControlller()

const routes: IRoute[] = [
  {
    path: `${PREFIX}/dashboard`,
    method: 'get',
    middeware: AdminMiddleware,
    controller: dashboardControlller.dashboard
  }
]

export default routes
