import { Request, Response } from 'express';

export default class ErrorController {
  badRequest(req: Request, res: Response): void {
    res.status(400).send('Bad Request');
  }

  unauthorized(req: Request, res: Response): void {
    res.status(401).send('Unauthorized');
  }

  paymentRequired(req: Request, res: Response): void {
    res.status(402).send('Payment Required');
  }

  unprocessableEntity(req: Request, res: Response): void {
    res.status(422).send('Unprocessable Entity');
  }

  forbidden(req: Request, res: Response): void {
    res.status(403).send('Forbidden');
  }

  notFound(req: Request, res: Response): void {
    res.status(404).send('Not Found');
  }

  internalServerError(req: Request, res: Response): void {
    res.status(500).send('Internal Server Error');
  }
}