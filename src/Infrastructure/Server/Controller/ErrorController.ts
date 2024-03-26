import { type Request, type Response } from 'express'

export default class ErrorController {
  byCode (req: Request, res: Response): void {
    const error = {
      400: 'Bad Request',
      401: 'Unauthorized',
      402: 'Payment Required',
      403: 'Forbidden',
      422: 'Unprocessable Entity',
      404: 'Not Found',
      500: 'Internal Server Error'
    }
    // if (req.params)
    res.status(400).send(error['400'])
  }
}
