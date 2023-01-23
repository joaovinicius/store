import { Request, Response, NextFunction } from 'express';

export default function PublicMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log('Request:', req.method, req.url);
  next()
}