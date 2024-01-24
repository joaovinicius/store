import { Request, Response } from 'express'
import jwt from 'jsonwebtoken';
import { db } from '../../Knex/Authentication/knexfile'
import { nanoid } from 'nanoid';

const secret = process.env.SECRET_KEY ?? 'secret'

const usuarios = [
  { name: 'Alice', login: 'alice@example.com', password : 'senha123' },
  { name: 'Bob', login: 'bob@example.com', password : 'senha456' }
];

export default class AuthController {
  // private service: any

  constructor() // service: any
  {
    // this.service = service
  }

  async requestSignIn(req: Request, res: Response): Promise<void> {
    try {
      const { login, password } = req.body;

      const usuario = usuarios.find(u => u.login === login && u.password === password);

      if (usuario)  {
        const token = jwt.sign(usuario, secret, { expiresIn: '1d' });
        res.json({ token });
      } else {
        res.status(401).json({ mensagem: 'Credenciais inválidas' });
      } 
      
    } catch (error) {
      res.status(422).json({ mensagem: 'Dados inválidos' });
    }
  }
    

  async requestSignUp(req: Request, res: Response): Promise<void> {
    try {
      const { name, login, password, passwordConfirmation } = req.body;

      if (password !== passwordConfirmation) {
        res.status(400).json({ mensagem: 'As senhas não coincidem' });
      } 
      const usuarioExistente = usuarios.find(u => u.login === login );

      if (usuarioExistente){
        res.status(400).json({mensagem : 'Este email já está em uso'});
      }else{
        const id = nanoid()
        
        const novoUsuario = { id, name,login, password } 
        const user = await db('users').insert(novoUsuario)
        // usuarios.push(novoUsuario)
        
        const token = jwt.sign(user, secret, { expiresIn: '1d' });
        res.json({ token });
      }
      
    } catch (error) {
      res.status(422).json({ mensagem: JSON.stringify(error) });
    }
  }  
  async requestSignInWithSocial(req: Request, res: Response): Promise<void> {
    
    const user = await db('users').where('id','=','aaa');
    console.log(user, res.locals)
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
