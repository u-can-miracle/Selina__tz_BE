import {
	Controller,
	Get,
	Inject,
	Req,
} from '@nestjs/common'

import { availableRoomSchema } from './schemas'
import { RoomService } from './room.service'
import { RoomModel } from './room.model'

import { Validate } from '../../../utils/guards/validation'
import { IRequest } from '../../../utils/interfaces'
import { IAvailableRoomsByTypes } from './interfaces'


@Controller('room')
export class RoomController {
	constructor(
		@Inject(RoomService) private readonly roomService: RoomService,
	) {}

	@Get()
  async findAll(): Promise<RoomModel[]> {
    return this.roomService.findAll()
  }

	@Get('available')
	@Validate({
		query: availableRoomSchema,
	})
  async getAvailable(@Req() req: IRequest): Promise<IAvailableRoomsByTypes> {
		const { estateId, from, to } = req.query

    return this.roomService.getAvailable({ estateId, from, to })
  }
}
