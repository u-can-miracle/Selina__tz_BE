import { RoomBookingModel } from '../room-booking.model'

import { ITimeInterval } from '../../../../utils/interfaces'

export interface IBookRoomParams extends ITimeInterval {
	roomId: number
}

export interface IBookRoomResp {
	isAlreadyBooked: boolean
	data?: RoomBookingModel
}
