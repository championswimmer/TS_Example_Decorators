import * as express from 'express'
import {Request, Response, Application} from 'express-serve-static-core'
import {get, use} from './decorators'
import {ExpressApp} from './decorators/express'

class ExpressServer {
  app: Application
  port: number
}

@ExpressApp(3434)
export default class Server extends ExpressServer {

  // @get('/a') getA(req, res: Response) {
  //   res.send("Welcome to AAAA")
  // }
  //
  //
  // @get('/b') getB(req, res: Response) {
  //   res.send("Welcome to BBBB")
  // }

  start() {
    this.app.listen(this.port)
  }

}
