import { type IRoute } from './IRoute.js'
import AdminMiddleware from '../Middleware/AdminMiddleware.js'
import DashboardControlller from '../Controller/Admin/DashboardControlller.js'

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
