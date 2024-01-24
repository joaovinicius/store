import { Request, Response, NextFunction } from 'express';

export default function PublicMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers['authorization']
  
  if (token) {
    return res.status(401).json({ mensagem : 'Usuário já logado'})
  }
  next()
}