import {
	Controller,
	Post,
	Inject,
	Req,
} from '@nestjs/common'

import { bookRoomSchema } from '../schemas'
import { RoomBookingService } from '../room-booking.service'

import { Validate } from '../../../../utils/guards/validation'
import { IRequest } from '../../../../utils/interfaces'

@Controller('room-booking')
export class RoomBookingController {
	constructor(
		@Inject(RoomBookingService) private readonly roomBookingService: RoomBookingService,
	) {}

	@Post('book')
	@Validate({
		body: bookRoomSchema,
	})
	async bookRoom(@Req() req: IRequest): Promise<any> {
		const { roomId, from, to } = req.body

		return this.roomBookingService.bookRoom({ roomId, from, to })
	}
}
