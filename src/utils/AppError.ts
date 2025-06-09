export abstract class AppError extends Error {
  constructor(errorCode: number, message: string, statusCode: number) {
    super(message)
    this.errorCode = errorCode
    this.statusCode = statusCode
  }
}
