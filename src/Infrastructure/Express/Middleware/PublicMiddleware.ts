import { Request, Response, NextFunction } from 'express';
import {ResponseErrorHandler, ErrorHandler} from '../Handlers/ErrorHandler';

export default function PublicMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers['authorization']

  try {
    if (token) {
      ErrorHandler('errors.user_already_logged_in')
    }
    next()
  } catch (error:any) {
    ResponseErrorHandler(res,error)
  }
}