import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ValidationMiddleware(DataTransferObject: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      res.locals.instance = new DataTransferObject(req.body)
      next();
    } catch (error) {
      res.status(422).send(error);
    }
  };
}
