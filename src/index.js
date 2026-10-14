#! /usr/bin/env node

import { getLocalIpAddress, PORT } from './config/webserver.config.js'
import logger from './utils/logger.js'
import { app } from './app.js'

app.listen(PORT, () => {
    logger.info(`Listening on http://${getLocalIpAddress}:${PORT}`)
})
