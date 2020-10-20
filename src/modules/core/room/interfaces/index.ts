import { ROOM_TYPE_NAMES } from '../../../../../db/dbData'
import { ITimeInterval } from '../../../../utils/interfaces'

const { DORM, PRIVATE, DELUXE } = ROOM_TYPE_NAMES

export interface IAvailableParams extends ITimeInterval {
	estateId: number | string
}

export interface IAvailableWithTypeParams extends IAvailableParams {
	roomType: typeof DORM | typeof PRIVATE | typeof DELUXE
}

export interface IAvailableRoom {
	room_id: number
	room_type_name: IAvailableWithTypeParams['roomType']
}

export interface IAvailableRoomsByTypes {
	DORM: IAvailableRoom[]
	PRIVATE: IAvailableRoom[]
	DELUXE: IAvailableRoom[]
}
