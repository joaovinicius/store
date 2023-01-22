import { IRoute } from './IRoute'
import PublicMiddleware from "../Middleware/PublicMiddleware";
import ErrorController from "../Controller/ErrorController";
const errorController = new ErrorController()

const routes: IRoute[] = [
  {
    path: '/400',
    method: 'get',
    middeware: PublicMiddleware,
    controller: errorController.badRequest,
  },
  {
    path: '/401',
    method: 'get',
    middeware: PublicMiddleware,
    controller: errorController.unauthorized,
  },
  {
    path: '/402',
    method: 'get',
    middeware: PublicMiddleware,
    controller: errorController.paymentRequired,
  },
  {
    path: '/403',
    method: 'get',
    middeware: PublicMiddleware,
    controller: errorController.unauthorized,
  },
  {
    path: '/404',
    method: 'get',
    middeware: PublicMiddleware,
    controller: errorController.notFound,
  },
  {
    path: '/422',
    method: 'get',
    middeware: PublicMiddleware,
    controller: errorController.unprocessableEntity,
  },
  {
    path: '/500',
    method: 'get',
    middeware: PublicMiddleware,
    controller: errorController.internalServerError,
  },
]

export default routes;