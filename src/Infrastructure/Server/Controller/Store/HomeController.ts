import { type Request, type Response } from 'express'

export default class HomeController {
  home (req: Request, res: Response): void {
    res.send('Express + TypeScript Server')
  }
}
