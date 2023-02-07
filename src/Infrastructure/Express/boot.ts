import express, { Express } from 'express';
import dotenv from 'dotenv';
import routes from './Route'
import ValidationMiddleware from './Middleware/ValidationMiddleware'
import { IRoute } from './Route/IRoute'
dotenv.config();

export default class Boot {
  app: Express;
  port: string;
  protocol: string;
  url: string;
  routes: IRoute[]

  constructor() {
    this.app = express();
    this.port = '';
    this.protocol = '';
    this.url = '';
    this.routes = []
  }

  setConfig() {
    this.port = process.env.API_PORT || '3001';
    this.protocol = process.env.API_PROTOCOL || 'http';
    this.url = process.env.API_URL || 'localhost';
    return this
  }

  setRoutes() {
    this.routes = routes
    this.routes.forEach((route: IRoute) => {
      this.app[route.method](
        route.path,
        [route.middeware, ...(route.dto ? [ValidationMiddleware(route.dto)]: [])],
        route.controller
      )
    })
    return this
  }

  build() {
    if (!('app' in this)) {
      throw new Error('app is missing')
    }
    if (!('port' in this)) {
      throw new Error('port is missing')
    }
    if (!('protocol' in this)) {
      throw new Error('protocol is missing')
    }
    if (!('url' in this)) {
      throw new Error('url is missing')
    }
    if (!('routes' in this)) {
      throw new Error('routes is missing')
    }

    this.app.listen(this.port, () => {
      console.log(`⚡️[server]: Server is running at ${this.protocol}://${this.url}:${this.port}`);
    });
  }
}