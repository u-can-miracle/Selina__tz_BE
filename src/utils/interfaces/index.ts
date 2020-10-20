import { Request } from 'express'
import * as Joi from 'joi'

export interface ITimeInterval {
	from: string
	to: string
}

export interface IRequest extends Request {
	body: any
}

export type AllowedJoiSchema = Joi.Schema

export interface RequestSchema {
  query?: AllowedJoiSchema
  params?: AllowedJoiSchema
  body?: AllowedJoiSchema
}
