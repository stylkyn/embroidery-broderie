'use strict'
import { type Request, type Response } from 'express'

/**
 * List of API examples.
 * @route GET /api
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, require-await
export const getApi = async (_req: Request, res: Response) => {
  return res.status(200).end()
}
