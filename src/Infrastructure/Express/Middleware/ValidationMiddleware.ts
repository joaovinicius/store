import { Request, Response, NextFunction } from 'express';
import { getClassAttibutes } from '../../../Support/Helper/TsMorph'

export default function ValidationMiddleware(DataTransferObject: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      res.locals.instance = new DataTransferObject(req.body)
      next();
    } catch (error) {
      console.log(DataTransferObject.name, getClassAttibutes(DataTransferObject.name))
      res.status(422).send(error);
    }
  };
}
