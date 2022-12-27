import { IRoute } from './IRoute'
import PublicMiddleware from "../Middleware/PublicMiddleware";
import HomeController from "../Controller/HomeController";

const homeController = new HomeController()

const routes: IRoute[] = [
  {
    path: '/',
    method: 'GET',
    middeware: PublicMiddleware,
    controller: homeController,
    action: 'home'
  }
]

export default routes;