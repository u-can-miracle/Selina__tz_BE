import { Inject, Injectable } from '@nestjs/common'
import { repositoryFactory } from 'objection-repositories'

import { RoomModel } from './room.model'
import {
	IAvailableWithTypeParams,
	IAvailableRoom,
} from './interfaces'

import { DATABASE_CONNECTION } from '../../meta/db'
import { REPO_FACTORY } from './../../meta/repo.factory'
import { TABLE_NAMES } from '../../../../db/dbData'

@Injectable()
export class RoomRepository {
	common = null

	constructor(
		@Inject(DATABASE_CONNECTION) private readonly connection,
		@Inject(RoomModel) private readonly roomModel,
		@Inject(REPO_FACTORY) private readonly repFactory: repositoryFactory,
	) {
		this.common = this.repFactory.getRepository<RoomModel>(
			connection,
			roomModel,
		)
	}

	async getAvailable({
		from,
		to,
		estateId,
		roomType,
	}: IAvailableWithTypeParams): Promise<IAvailableRoom[]> {
		/*
		1) Get room_ids for correstonding estate with choosen type
		2) Get room_ids which are already boioked
		3) Exclude 1st result from 2nd result using 'NOT IN'
		*/
		const result = await this.connection.raw(`
			SELECT room_id, room_type_name, price_in_usd_cents FROM (
				/* 1) */
		    SELECT
					${TABLE_NAMES.room}.id AS room_id,
					${TABLE_NAMES.roomType}.name AS room_type_name,
					${TABLE_NAMES.roomType}.price_in_usd_cents AS price_in_usd_cents
		    FROM room
				INNER JOIN ${TABLE_NAMES.roomType}
				ON ${TABLE_NAMES.room}.type_id = ${TABLE_NAMES.roomType}.id
				WHERE ${TABLE_NAMES.roomType}.name = ?
				AND room.estate_id <= ?
			) as roomSubQuery
			/* 3) */
			WHERE room_id NOT IN
			(
					/* 2) */
			    SELECT ${TABLE_NAMES.roomBooking}.room_id
			    FROM ${TABLE_NAMES.roomBooking}
			    WHERE (${TABLE_NAMES.roomBooking}.booked_from BETWEEN ? AND ?)
					OR (${TABLE_NAMES.roomBooking}.booked_to BETWEEN ? AND ?)
					/* Can be optimized using JOIN with 'estate' and 'room' tables */
			)
		`, [
			roomType,
			estateId,
			from,
			to,
			from,
			to,
		])
		const availableRooms = result.rows

		return availableRooms
	}
}
