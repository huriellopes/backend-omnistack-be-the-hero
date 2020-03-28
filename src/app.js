const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors()) // prod: origin: http://meuapp.com
app.use(function (req, res, next) {
    res.set('X-XSS-Protection', 0);
    next();
})
app.use(express.json())
app.use(routes)
app.use(errors())

module.exports = app
