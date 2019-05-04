var express = require('express')
var logger = require('morgan')

var hello = require('./routes/hello')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', hello)

module.exports = app
