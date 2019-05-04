import { Subject, OperatorFunction } from 'rxjs'
import { first } from 'rxjs/operators'
import express from 'express'

interface Error {
  status: number,
  body: any
}

export class hukx {

  private _router: express.Router;

  constructor(router: express.Router) {
    this._router = router
  }

  get(path: string, ...handlers: express.RequestHandler[]) {
    this._router.get(path, handlers)
  }

  post(path: string, ...handlers: express.RequestHandler[]) {
    this._router.post(path, handlers)
  }

  put(path: string, ...handlers: express.RequestHandler[]) {
    this._router.put(path, handlers)
  }

  delete(path: string, ...handlers: express.RequestHandler[]) {
    this._router.delete(path, handlers)
  }

  static pipe<A>(...operators: OperatorFunction<{}, A>[]): express.RequestHandler {
    const subject = (new Subject() as any).pipe(...operators) as Subject<any>
    return function (req: express.Request, res: express.Response) {
      subject.pipe(first()).subscribe(hukx.onNext(req, res), hukx.onError(res))
      subject.next(req)
    }
  }

  static error(status: number, body: any): Error {
    return {
      status: status,
      body: body
    }
  }

  private static onNext(req: express.Request, res: express.Response) {
    return (water: any) => {
      if (typeof (water) != typeof (req)) {
        res.status(200).send(water)
      } else {
        res.status(200)
      }
    }
  }

  private static onError(res: express.Response) {
    return (err: Error) => {
      if (err.status) {
        res.status(err.status).send(err.body)
      } else {
        res.status(500)
      }
    }
  }
}

export function piperOf(router: express.Router) {
  return new hukx(router)
}