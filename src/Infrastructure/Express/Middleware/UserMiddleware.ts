import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secret = process.env.SECRET_KEY??'secret'

export default function UserMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(400).json({ mensagem: 'Token não fornecido' });
  }
  
  try {
    const decoded = jwt.verify(token, secret);
    if (!decoded) {
      return res.status(401).json({ mensagem: 'Não autorizado' });
    }
    res.locals.user = decoded
    next()
    
  } catch (error) {
    return res.status(401).json({ mensagem: 'Não autorizado' });
  }
  // console.log('Request Type:', req.method);/
}