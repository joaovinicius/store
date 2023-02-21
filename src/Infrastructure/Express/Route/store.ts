import { IRoute } from './IRoute'
import HomeController from '../Controller/Store/HomeController'
import PublicMiddleware from '../Middleware/PublicMiddleware'

const PREFIX = 'store'
const homeController = new HomeController()

const routes: IRoute[] = [
  {
    path: `${PREFIX}/home`,
    method: 'get',
    middeware: PublicMiddleware,
    controller: homeController.home
  },
]

export default routes
