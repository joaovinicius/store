import { Request, Response } from 'express';

export default class AuthController {
  private service: any

  constructor(service: any) {
    this.service = service
  }

  requestSignIn(req: Request, res: Response): void {
    res.send('Express + TypeScript Server');
  }

  requestSignInWithSocial(req: Request, res: Response): void {
    res.send('Express + TypeScript Server');
  }

  requestRecoveryUserPassword(req: Request, res: Response): void {
    res.send('Express + TypeScript Server');
  }

  requestResendUserPasswordRecoveryEmail(req: Request, res: Response): void {
    res.send('Express + TypeScript Server');
  }

  requestResetUserPassword(req: Request, res: Response): void {
    res.send('Express + TypeScript Server');
  }

  requestValidateUserAccount(req: Request, res: Response): void {
    res.send('Express + TypeScript Server');
  }

  requestUpdatePassword(req: Request, res: Response): void {
    res.send('Express + TypeScript Server');
  }

  requestValidateUserResetPasswordToken(req: Request, res: Response): void {
    res.send('Express + TypeScript Server');
  }
}
