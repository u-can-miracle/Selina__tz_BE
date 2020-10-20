import * as Joi from 'joi'

export const bookRoomSchema = Joi.object({
	roomId: Joi.number().required(),
	from: Joi.date().less(Joi.ref('to')).required(),
  to: Joi.date().required()
})
