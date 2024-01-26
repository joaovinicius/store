import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import lang from '../../i18n';

const secret = process.env.SECRET_KEY??'secret'

export default function UserMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(400).json({ mensagem: lang('errors.token_not_exist') });
  }
  
  try {
    const decoded = jwt.verify(token, secret);
    if (!decoded) {
      return res.status(401).json({ mensagem: lang('errors.not_authorized')});
    }
    res.locals.user = decoded
    next()
    
  } catch (error) {
    return res.status(401).json({ mensagem: lang('errors.not_authorized') });
  }
  // console.log('Request Type:', req.method);/
}