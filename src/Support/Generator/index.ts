import {NodePlopAPI} from 'plop'
import Domain from './Scaffoldings/Domain'

export default function (plop: NodePlopAPI) {
  plop.setGenerator('Domain', Domain)
}
