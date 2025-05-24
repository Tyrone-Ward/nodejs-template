import { Router } from 'express'
import { root, error, apiHealth } from '../controllers/index.js'

const rootRouter = Router()

rootRouter.get('/', root)
rootRouter.get('/error', error)
rootRouter.get('/health', apiHealth)

export default rootRouter
