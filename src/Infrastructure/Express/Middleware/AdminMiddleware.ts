import { Request, Response, NextFunction } from 'express';

export default function AdminMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log('Request Type:', req.method);
  next()
}