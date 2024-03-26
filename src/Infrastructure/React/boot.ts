import http, { type Server } from 'http'
import { join, normalize, resolve, extname } from 'path'
import { readFile } from 'fs'
import * as ReactDOMServer from 'react-dom/server'
import App from './App'
import { Server as SocketServer } from 'socket.io'

export default class Boot {
  directoryName = './dist'
  root = normalize(resolve(this.directoryName))
  server?: Server
  port: string
  protocol: string
  url: string
  assets = {
    css: 'text/css',
    js: 'application/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
  }

  constructor () {
    this.port = ''
    this.protocol = ''
    this.url = ''
    // this.routes = []
  }

  setConfig () {
    this.port = process.env.WEB_PORT || '3000'
    this.protocol = process.env.WEB_PROTOCOL || 'http'
    this.url = process.env.WEB_URL || 'localhost'

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
    // if (!('routes' in this)) {
    //   throw new Error('routes is missing')
    // }

    this.server = http
      .createServer(this.send.bind(this))
      .listen(this.port, this.ready.bind(this))
  }

  async send (req: http.IncomingMessage, res: http.ServerResponse) {
    if (req.url) {
      const extension = extname(req.url).slice(1) as keyof typeof this.assets;

      if (this.assets?.[extension]) {
        const filePath = join(this.root, req.url);
        const isPathUnderRoot = normalize(resolve(filePath)).startsWith('/');
        if (!isPathUnderRoot) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('404: File not found');
          return;
        }
        readFile(filePath, (err, data) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('404: File not found');
          } else {
            res.writeHead(200, { 'Content-Type': this.assets[extension] });
            res.end(data);
          }
        });
        return
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' }) // http header
        const result = ReactDOMServer.renderToString(App())
        res.write(
          `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Store</title></head><body><div id="app">${result}</div><script src="/client.js"></script><script src="/hotreload.js"></script></body></html>`)
        res.end()
      }
    } else {
      res.end()
    }
  }

  ready () {
    console.log(`⚡️[server]: Server is running at ${this.protocol}://${this.url}:${this.port}`)
    new SocketServer(this.server)
  }
}
