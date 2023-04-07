import {NodePlopAPI} from 'plop'
import Domain from './Scaffoldings/Domain'
import Vuex from './Scaffoldings/Vue/Vuex'
import Component from './Scaffoldings/Vue/Component'

export default function (plop: NodePlopAPI) {
  plop.setGenerator('Domain', Domain)
  plop.setGenerator('Vuex', Vuex)
  plop.setGenerator('Component', Component)
}
