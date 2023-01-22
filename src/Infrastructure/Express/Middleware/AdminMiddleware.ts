import { Request, Response, NextFunction } from 'express';

export default function AdminMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // res.status(500).send({ error: 'Something failed!' });
  console.log('Request Type:', req.method);
  next()
}