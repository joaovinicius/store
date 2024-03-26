import http, { type Server } from 'http'
import dotenv from 'dotenv'
import { type IRoute } from './Route/IRoute.js'
// import routes from './Route/index.js'
// import ValidationMiddleware from './Middleware/ValidationMiddleware.js'

dotenv.config()

export default class Boot {
  server?: Server
  port: string
  protocol: string
  url: string
  routes: IRoute[]

  constructor () {
    this.port = ''
    this.protocol = ''
    this.url = ''
    this.routes = []
  }

  setConfig () {
    this.port = process.env.API_PORT || '3001'
    this.protocol = process.env.API_PROTOCOL || 'http'
    this.url = process.env.API_URL || 'localhost'

    return this
  }

  setRoutes () {
  //   this.routes = routes
  //   this.routes.forEach((route: IRoute) => {
  //     this.app[route.method](
  //       `/api/${route.path}`,
  //       [route.middeware, ...(route.dto ? [ValidationMiddleware(route.dto)]: [])],
  //       route.controller
  //     )
  //   })

    return this
  }

  build () {
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

    this.server = http
      .createServer(this.send.bind(this))
      .listen(this.port, this.ready.bind(this))
  }

  send (req: http.IncomingMessage, res: http.ServerResponse) {
    res.writeHead(200, { 'Content-Type': 'text/html' }) // http header
    const url = req.url

    if (url === '/about') {
      res.write('<h1>about us<h1>') // write a respons
    } else if (url === '/contact') {
      res.write('<h1>contact us pages<h1>') // write a response
    } else {
      res.write('<h1>Hello World!<h1>') // write a response
    }

    // res.write('<h1>Hello World!<h1>'); //write a response
    res.end() // end the response
  }

  ready () {
    console.log(`⚡️[server]: Server is running at ${this.protocol}://${this.url}:${this.port}`)
  }
}
