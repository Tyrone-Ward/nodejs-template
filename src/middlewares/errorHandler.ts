import { AppError } from '../utils/AppError.js'
import { Request, Response, NextFunction } from 'express'

export const errorHandler = (error, req: Request, res: Response, next: NextFunction) => {
  console.log(error)

  if (error.name === 'ValidationError') {
    return res.status(400).send({
      type: 'ValidationError',
      details: error.details
    })
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      errorCode: error.errorCode
    })
  }

  return res.status(500).send('Something went wrong')
}
