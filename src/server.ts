import * as express from 'express'
import {Request, Response, Application} from 'express-serve-static-core'
import {get, use} from './decorators'


export default class Server {
  public app: Application

  @get('/a')
  a(req, res:Response) {
    res.send("Welcome to AAAAA")
  }

  @use
  hello(req, res: Response) {
    res.send("Hello World")
  }


  start () {
    this.app.listen(3434, () => {
      console.log(`Started on http://localhost:3434`)
    })
  }
}
