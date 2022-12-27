import { Method } from 'Adapters/HttpClient'

export interface IRoute {
  path: string,
  method: Method,
  middeware: any,
  controller: any,
  action: string,
}