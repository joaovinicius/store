import { IRoute } from './IRoute'
import error from './error'
import HomeController from "../Controller/Home/HomeController";
import HomeDto from "../Controller/Home/HomeDto";
import PublicMiddleware from "../Middleware/PublicMiddleware";

const homeController = new HomeController()

const routes: IRoute[] = [
  // ...admin,
  // ...auth,
  ...error,
  {
    path: '/',
    method: 'get',
    middeware: PublicMiddleware,
    controller: homeController.home,
    dto: HomeDto
  },
]

export default routes;