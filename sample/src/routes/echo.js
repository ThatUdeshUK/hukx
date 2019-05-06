const express = require('express')
const router = express.Router()
const { map } = require('rxjs/operators')

const { hukx, piperOf } = require('hukx')
const piper = piperOf(router)



module.exports = router
