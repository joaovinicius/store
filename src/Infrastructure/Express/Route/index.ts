import { IRoute } from './IRoute'
import admin from './admin'
import authentication from './authentication'
import store from './store'

import PublicMiddleware from '../Middleware/PublicMiddleware'
import ErrorController from '../Controller/ErrorController'

const errorController = new ErrorController()

const routes: IRoute[] = [
  ...admin,
  ...authentication,
  ...store,
  {
    path: '/*',
    method: 'get',
    middeware: PublicMiddleware,
    controller: errorController.byCode
  },
]

export default routes
