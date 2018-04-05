import * as express from 'express'
import {Request, Response} from 'express-serve-static-core'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send("HELLO")
})

app.listen(3434, () => {
  console.log(`Started on http://localhost:3434`)
})