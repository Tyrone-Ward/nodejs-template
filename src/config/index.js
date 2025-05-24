import 'dotenv/config'
import express from 'express'
import http from 'node:http'

const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const expressServer = http.createServer(app)
const PORT = process.env.PORT || 3000

export { app, expressServer, PORT }
