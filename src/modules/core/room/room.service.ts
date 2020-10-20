import { Injectable, Inject } from '@nestjs/common'

import { RoomRepository } from './room.repository'
import { RoomModel } from './room.model'
import {
	IAvailableParams,
	IAvailableRoomsByTypes,
} from './interfaces'

import { ROOM_TYPE_NAMES } from '../../../../db/dbData'

const { DORM, PRIVATE, DELUXE } = ROOM_TYPE_NAMES

@Injectable()
export class RoomService {
	constructor(
		@Inject(RoomRepository) private readonly roomRepository: RoomRepository,
	) {}

  findAll(): RoomModel[] {
    return this.roomRepository.common.find({})
  }

  async getAvailable(
		params: IAvailableParams,
	): Promise<IAvailableRoomsByTypes> {
		try {
			const [
				dormRooms,
				provateRooms,
				deluxeRooms,
			] = await Promise.all([
				this.roomRepository.getAvailable({
					...params,
					roomType: DORM
				}),
				this.roomRepository.getAvailable({
					...params,
					roomType: PRIVATE
				}),
				this.roomRepository.getAvailable({
					...params,
					roomType: DELUXE
				}),
			])

			return {
				DORM: dormRooms,
				PRIVATE: provateRooms,
				DELUXE: deluxeRooms,
			}
		} catch (err) {
			// add logger
			throw err
		}
  }
}
