import * as Joi from 'joi'

export const availableRoomSchema = Joi.object({
	estateId: Joi.number().required(),
	from: Joi.date().less(Joi.ref('to')).required(),
  to: Joi.date().required()
})
