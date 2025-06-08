import os from 'node:os'
import { Request, Response } from 'express'
import { AppError } from '../utils/AppError.js'

export const root = (req: Request, res: Response) => {
  res.send('hello')
}
export const error = () => {
  throw new AppError('INVALID_SUBSCRIPTION', 'Subscription not found', 400)
}
export const apiHealth = (req: Request, res: Response) => {
  res.json({
    database: 'green',
    health: 'green',
    process_uptime: `${Math.floor(process.uptime())} seconds`,
    system_uptime: `${Math.floor(os.uptime())} seconds`
  })
}
