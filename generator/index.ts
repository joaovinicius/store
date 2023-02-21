import {NodePlopAPI} from 'plop'
import Domain from './scaffoldings/Domain'
import Vuex from './scaffoldings/Vuex'

export default function (plop: NodePlopAPI) {
  plop.setGenerator('Domain', Domain)
  plop.setGenerator('Vuex', Vuex)
}
