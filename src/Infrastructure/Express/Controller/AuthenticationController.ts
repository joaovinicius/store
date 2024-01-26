import { Request, Response } from 'express'
import jwt from 'jsonwebtoken';
import { db } from '../../Knex/Authentication/knexfile'
import bcrypt from 'bcrypt'

const secret = process.env.SECRET_KEY ?? 'secret'


export default class AuthController {
  // private service: any

  constructor() // service: any
  {
    // this.service = service
  }

  async requestSignIn(req: Request, res: Response): Promise<void> {
    try {
      const { email, password, tenantId } = req.body;

      const usuarioExistente = await db('user')
        .where('email', '=', email)
        .andWhere('tenant_id', '=', tenantId)
        .first()

      if (usuarioExistente) {
        await bcrypt.compare(password, usuarioExistente.password, (err, same) => {
          if (err || !same) {
            res.status(400).json({ mensagem: 'As senhas não coincidem' });
            return
          }
          if (same) {
            const token = jwt.sign({ id:usuarioExistente.id, email, tenantId}, secret, { expiresIn: '1d' });
            res.json({ token });
          }
        })
      } else {
        res.status(401).json({ mensagem: 'Credenciais inválidas' });
      }

    } catch (error) {
      res.status(422).json({ mensagem: 'Dados inválidos' });
    }
  }


  async requestSignUp(req: Request, res: Response): Promise<void> {
    try {
      const { email, password, passwordConfirmation, tenantId } = req.body;

      if (password !== passwordConfirmation) {
        res.status(400).json({ mensagem: 'As senhas não coincidem' });
      }
      const usuarioExistente = await db('user')
        .where('email', '=', email)
        .andWhere('tenant_id', '=', tenantId)
        .first()
      if (usuarioExistente) {
        res.status(400).json({ mensagem: 'Este email já está em uso' });
      } else {
        await bcrypt.hash(password, 10, async  (err, hash) => {
          if (err) {

            res.status(400).json({ mensagem: 'As senhas não coincidem' });
            return
          }
          await db('user')
            .returning('id')
            .insert({
              email: email,
              password: hash,
              tenant_id: tenantId
            })
            .then(([id]) => {
              const token = jwt
                .sign({id, email, tenantId}, secret, { expiresIn: '1d' });
              res.json({ token });
            });
        });
      }

    } catch (error) {
      res.status(422).json({ mensagem: JSON.stringify(error) });
    }
  }
  async requestSignInWithSocial(req: Request, res: Response): Promise<void> {

    // const user = await db('users').where('id', '=', 'aaa');
    console.log(res.locals)
    res.send('Express + TypeScript Server')
  }

  requestRecoveryUserPassword(req: Request, res: Response): void {
    res.send('Express + TypeScript Server')
  }

  requestResendUserPasswordRecoveryEmail(req: Request, res: Response): void {
    res.send('Express + TypeScript Server')
  }

  requestResetUserPassword(req: Request, res: Response): void {
    res.send('Express + TypeScript Server')
  }

  requestValidateUserAccount(req: Request, res: Response): void {
    res.send('Express + TypeScript Server')
  }

  requestUpdatePassword(req: Request, res: Response): void {
    res.send('Express + TypeScript Server')
  }

  requestValidateUserResetPasswordToken(req: Request, res: Response): void {
    res.send('Express + TypeScript Server')
  }
}
