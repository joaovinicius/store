import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import lang from '../../i18n';
import ErrorHandler from '../Handlers/ResponseErrorHandler';

const secret = process.env.SECRET_KEY??'secret'

export default function UserMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {


  try {
    const token = req.headers['authorization'];
    if (!token) {
      ErrorHandler(res,400,'errors.token_not_exist')
      return
    }
    const decoded = jwt.verify(token, secret);
    if (!decoded) {
    ErrorHandler(res,401,'errors.not_authorized')

    }
    res.locals.user = decoded
    next()

  } catch (error) {
    ErrorHandler(res,401,'errors.not_authorized')
    }
  // console.log('Request Type:', req.method);/
}