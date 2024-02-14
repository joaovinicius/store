import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../Handlers/ErrorHandler';

export default function PublicMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers['authorization']

  if (token) {
    ErrorHandler(res,401,'errors.user_already_logged_in')
    return
    
  }
  next()
}