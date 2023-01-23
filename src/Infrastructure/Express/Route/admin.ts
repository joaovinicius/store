import { IRoute } from './IRoute'
import PublicMiddleware from "../Middleware/PublicMiddleware";
import HomeController from "../Controller/HomeController";

const homeController = new HomeController()

const routes: IRoute[] = [
  {
    path: '/',
    method: 'get',
    middeware: PublicMiddleware,
    controller: homeController.home,
  },
]

export default routes;