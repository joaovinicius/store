import { Method } from 'Adapters/HttpClient'
import { Request, Response, NextFunction } from 'express';

export interface IRoute {
  path: string,
  method: Method,
  middeware(req: Request, res: Response, next: NextFunction): void,
  controller(req: Request, res: Response): void,
  dto?: never
}
