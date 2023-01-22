import { Request, Response } from 'express';

export default class DashboardControlller {
  dashboard(req: Request, res: Response): void {
    res.send('Dashboard');
  }
}