import { Method } from 'Adapters/HttpClient'
import PublicMiddleware from "./Middleware/PublicMiddleware";
import HomeController from "./Controller/HomeController";

const homeController = new HomeController()

export interface IRoute {
  path: string,
  method: Method,
  middeware: any,
  controller: any,
  action: string,
}

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