import { type IRoute } from './IRoute.js'
import admin from './admin.js'
import authentication from './authentication.js'
import store from './store.js'

import PublicMiddleware from '../Middleware/PublicMiddleware.js'
import ErrorController from '../Controller/ErrorController.js'

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
  }
]

export default routes
