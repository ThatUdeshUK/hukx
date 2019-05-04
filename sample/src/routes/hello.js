const express = require('express')
const router = express.Router()
const { map } = require('rxjs/operators')

const { hukx, piperOf } = require('hukx')
const piper = piperOf(router)

piper.get('/', hukx.pipe(
  map(() => 'Hello Hukx!')
))

module.exports = router
