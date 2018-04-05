import * as express from 'express'
/**
 * Class decorator factory
 *
 * Usage:
 *
 * @ExpressApp(3434)
 * class Server {
 *
 * }
 * @param {number} port
 * @constructor
 */
export function ExpressApp(port: number) {

  return function (constructor: Function) {
    if (!constructor.prototype.app) {
      constructor.prototype.app = express()
      constructor.prototype.port = port
    }
  }

}


export function get(path: string) {
  return function (target, key, descriptor) {

  }
}