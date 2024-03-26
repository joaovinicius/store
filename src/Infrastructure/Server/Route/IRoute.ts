import { type Method } from 'Adapters/HttpClient.js'
import { type Request, type Response, type NextFunction } from 'express'

export interface IRoute {
  path: string
  method: Method
  middeware: (req: Request, res: Response, next: NextFunction) => void
  controller: (req: Request, res: Response) => void
  dto?: never
}
