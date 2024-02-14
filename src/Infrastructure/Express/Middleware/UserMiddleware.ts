import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import ErrorHandler from '../Handlers/ErrorHandler';

const secret = process.env.SECRET_KEY??'secret'

export default function UserMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.headers['authorization'];
    if (token) {
      const decoded = jwt.verify(token, secret);
      res.locals.user = decoded
      next()
      return
    }
    
    ErrorHandler(res,400,'errors.not_authorized')
  } catch (error) {
    ErrorHandler(res,401,'errors.not_authorized')
  }
}