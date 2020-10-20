import { Inject, Injectable } from '@nestjs/common'
import { repositoryFactory } from 'objection-repositories'

import { RoomBookingModel } from './room-booking.model'
import {
	IBookRoomParams,
} from './interfaces'

import { DATABASE_CONNECTION } from './../../meta/db'
import { REPO_FACTORY } from './../../meta/repo.factory'
import { TABLE_NAMES } from './../../../../db/dbData'

@Injectable()
export class RoomBookingRepository {
	common = null

	constructor(
		@Inject(DATABASE_CONNECTION) private readonly connection,
		@Inject(RoomBookingModel) private readonly roomBookingModel,
		@Inject(REPO_FACTORY) private readonly repFactory: repositoryFactory,
	) {
		this.common = this.repFactory.getRepository<RoomBookingModel>(
			connection,
			roomBookingModel,
		)
	}

	async getRoomBookingsForInterval({
		roomId,
		from,
		to,
	}: IBookRoomParams) {
		const result = await this.connection.raw(`
			SELECT room_id
			FROM ${TABLE_NAMES.roomBooking}
			WHERE room_id = ?
			AND (
				(booked_from BETWEEN ? AND ?)
				OR (booked_to BETWEEN ? AND ?)
			)
		`, [
			roomId,
			from,
			to,
			from,
			to,
		])
		const bookings = result.rows

		return bookings
	}
}
