import * as express from 'express'

/**
 * We will use this as @use
 *
 * When we use a class X, and method y
 *
 * <pre>
 * class X {
 *
 *  @use y() {}
 * }
 * </pre>
 *
 *
 * In this case,
 * 'target' is X
 * key is "y"
 * and descriptor is Object descriptor of X.y
 *
 * @param target This is the class inside which we use @get eg. Server
 * @param key This is name of key of function eg. "hello"
 * @param descriptor This is the method itself i.e. value of server["hello"]
 * @returns {(target) => any}
 */
import Server from './server'

export function use(target: Server, key, descriptor) {
  if (!target.app) {
    target.app = express()
  }

  target.app.use(target[key])
}

export function get(path) {
  return function (target: Server, key, descriptor) {

    if (!target.app) {
      target.app = express()
    }

    target.app.get(path, target[key])
  }
}