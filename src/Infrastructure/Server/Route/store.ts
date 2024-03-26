import { type IRoute } from './IRoute.js'
import HomeController from '../Controller/Store/HomeController.js'
import PublicMiddleware from '../Middleware/PublicMiddleware.js'

const PREFIX = 'store'
const homeController = new HomeController()

const routes: IRoute[] = [
  {
    path: `${PREFIX}/home`,
    method: 'get',
    middeware: PublicMiddleware,
    controller: homeController.home
  }
]

export default routes
