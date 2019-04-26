const { Subject } = require('rxjs')
const { first } = require('rxjs/operators')

class huk {

  constructor(router) {
    this._router = router
  }

  get(path, subject, ...handlers) {
    this._router.get(path, handlers, function (req, res) {
      subject.pipe(first()).subscribe(huk.onNext(req, res), huk.onError(res))
      subject.next(req)
    });
  }

  post(path, subject, ...handlers) {
    this._router.post(path, handlers, function (req, res) {
      subject.pipe(first()).subscribe(huk.onNext(req, res), huk.onError(res))
      subject.next(req)
    });
  }

  put(path, subject, ...handlers) {
    this._router.put(path, handlers, function (req, res) {
      subject.pipe(first()).subscribe(huk.onNext(req, res), huk.onError(res))
      subject.next(req)
    });
  }

  delete(path, subject, ...handlers) {
    this._router.delete(path, handlers, function (req, res) {
      subject.pipe(first()).subscribe(huk.onNext(req, res), huk.onError(res))
      subject.next(req)
    });
  }

  static onNext(req, res) {
    return (water) => {
      if (water != req) {
        res.status(200).send(water)
      } else {
        res.status(200)
      }
    }
  }

  static onError(res) {
    return (err) => {
      if (err.status) {
        console.error(err)
        res.status(err.status).send(err.body)
      } else {
        console.log(err)
      }
    }
  }

  create() {
    return new Subject()
  }

  error(status, body) {
    return {
      status: status,
      body: body
    }
  }
}

function createHuk(router) {
  return new huk(router)
}

exports = module.exports = createHuk;
