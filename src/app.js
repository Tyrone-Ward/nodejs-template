#! /usr/bin/env node

import { expressServer, app, PORT } from '@config/index.js'
import rootRouter from '@routes/rootRoutes.js'
import morganMiddleware from '@middlewares/httpLpgger.js'
import logger from '@utils/logger.js'
import { errorHandler } from '@middlewares/errorHandler'

app.use(morganMiddleware)

app.use('/', rootRouter)

app.use(errorHandler)

expressServer.listen(PORT, () => {
  logger.info(`Listening on http://localhost:${PORT}`)
})
