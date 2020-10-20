import { CanActivate, ExecutionContext, UseGuards } from '@nestjs/common'

import { IRequest, RequestSchema, AllowedJoiSchema } from '../interfaces'
import { validate } from '../validators/joi.validator'

class ValidationGuard implements CanActivate {
  constructor(
    private readonly schema: {
			query?: AllowedJoiSchema;
			params?: AllowedJoiSchema;
			body?: AllowedJoiSchema;
		}
  ) {}

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest() as IRequest

    req.query = await validate(req.query, this.schema.query)
    req.params = await validate(req.params, this.schema.params)
    req.body = await validate(req.body, this.schema.body)

    return true
  }
}

export const Validate = (schema: RequestSchema) => UseGuards(new ValidationGuard(schema))
