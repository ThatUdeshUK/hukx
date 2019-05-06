const express = require('express')
const router = express.Router()
const { map } = require('rxjs/operators')

const { hukx, piperOf } = require('hukx')
const piper = piperOf(router)

piper.get('/', hukx.pipe(
  map((req) => {
    if (req.query.value) {
      return req.query.value
    } else {
      throw hukx.error(400, "No value query parameter")
    }
  })
))

const addHelloHandler = (req, res, next) => {
  if (!req.query.value)
    return res.status(400).send("No value query parameter")

  req.greating = 'Hello ' + req.query.value + "!"

  next()
}

piper.get('/hello', [addHelloHandler], hukx.pipe(
  map(req => req.greating)
))

module.exports = router
