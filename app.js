#! /usr/bin/env node

require('dotenv').config()

const express = require('express')
const logger = require('morgan')

const app = express()

const PORT = process.env.PORT || 3000 // set the port

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(logger('common')) // Standard Apache common log output.
app.use(express.static('public'))

app.use('/', require('./routes/index'))

const localIp = Object.values(require('os').networkInterfaces())
  .flat()
  .filter((item) => !item.internal && item.family === 'IPv4')
  .find(Boolean).address

app.listen(PORT, () => {
  console.log(`Server listening at http://${localIp}:${PORT}/`)
})
