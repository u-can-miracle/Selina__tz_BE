import { Injectable, Inject } from '@nestjs/common'

import { RoomBookingRepository } from './room-booking.repository'
import { RoomBookingModel } from './room-booking.model'
import { IBookRoomParams, IBookRoomResp } from './interfaces'

@Injectable()
export class RoomBookingService {
	constructor(
		@Inject(RoomBookingRepository) private readonly roomBookingRepository: RoomBookingRepository,
	) {}

	async bookRoom({
		roomId,
		from,
		to,
	}: IBookRoomParams): Promise<IBookRoomResp> {
		// 1) get room booking by interval
		const bookings = await this.roomBookingRepository.getRoomBookingsForInterval({
			roomId,
			from,
			to,
		})

		if (bookings.length) {
			return {
				isAlreadyBooked: true,
			}
		}

		// 2) create booking if bookings have not exist yet
		const result: RoomBookingModel = await this.roomBookingRepository.common.create({
			room_id: roomId,
			booked_from: from,
			booked_to: to,
		})

		return {
			isAlreadyBooked: false,
			data: result,
		}
	}
}
