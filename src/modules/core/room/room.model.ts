import { Injectable } from '@nestjs/common'
import { Model } from 'objection'
import * as path from 'path'

import { TABLE_NAMES } from '../../../../db/dbData'
import { BaseModel } from '../../../utils/model.base'
import { RoomTypeModel } from '../room-type/room-type.model'
import { EstateModel } from '../estate/estate.model'
import { RoomBookingModel } from '../room-booking/room-booking.model'

@Injectable()
export class RoomModel extends BaseModel {
  static tableName = TABLE_NAMES.room

  id: number
  estateId: number
  typeId: number

	estate: EstateModel
	type: RoomTypeModel
	roomBookings: RoomBookingModel[]

  static relationMappings = {
		estate: {
			relation: Model.BelongsToOneRelation,
			modelClass: path.join(__dirname, '../estate/estate.model'),
			join: {
				from: `${RoomModel.tableName}.estate_id`,
				to: `${TABLE_NAMES.estate}.id`,
			}
		},
    type: {
      relation: Model.BelongsToOneRelation,
      modelClass: path.join(__dirname, '../room-type/room-type.model'),
      join: {
				from: `${RoomModel.tableName}.type_id`,
        to: `${TABLE_NAMES.roomType}.id`,
      }
    },
    roomBookings: {
      relation: Model.HasManyRelation,
      modelClass: path.join(__dirname, '../room-booking/room-booking.model'),
      join: {
				from: `${RoomModel.tableName}.id`,
        to: `${TABLE_NAMES.roomBooking}.room_id`,
      }
    },
  }
}
