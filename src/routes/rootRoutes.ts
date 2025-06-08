import { Router } from 'express'
import { root, error, apiHealth } from '@controllers/api'

const rootRouter = Router()

rootRouter.get('/', root)
rootRouter.get('/error', error)
rootRouter.get('/health', apiHealth)

export default rootRouter
