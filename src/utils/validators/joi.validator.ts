import { BadRequestException } from '@nestjs/common'

import { AllowedJoiSchema } from '../interfaces'

const joiOptions = {
  stripUnknown: true,
  abortEarly: false
}

export async function validate(value, schema: AllowedJoiSchema) {
  if (!schema) {
    return value
  }

  const result = schema.validate(value, joiOptions)

  const { error } = result
  if (error) {
    const errorMessage = error.details ? error.details.map(d => d.message) : error.message

    throw new BadRequestException({
      errorMessage: { systemErrors: errorMessage }
    })
  }

  return result.value
}
