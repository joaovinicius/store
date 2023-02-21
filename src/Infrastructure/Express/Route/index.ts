import { IRoute } from './IRoute'
import error from './error'
import HomeController from '../Controller/HomeController'
import PublicMiddleware from '../Middleware/PublicMiddleware'

const homeController = new HomeController()

const routes: IRoute[] = [
  // ...admin,
  // ...auth,
  ...error,
  {
    path: '/',
    method: 'get',
    middeware: PublicMiddleware,
    controller: homeController.home
  }
]

export default routes
