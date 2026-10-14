import 'dotenv/config'
import express from 'express'
import rootRouter from './routes/rootRoutes.js'
import morganMiddleware from './middlewares/httpLpgger.js'
import { errorHandler } from './middlewares/errorHandler.js'
import swaggerDocument from './docs/openapi.json' with { type: 'json' }
import swaggerUi from 'swagger-ui-express'

const app = express()

app.use(morganMiddleware)

// parse application/json
app.use(express.json())

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/', rootRouter)

app.use(errorHandler)

export { app }
