import { Injectable } from '@nestjs/common'
import { Model } from 'objection'
import * as path from 'path'

import { TABLE_NAMES } from './../../../../db/dbData'
import { BaseModel } from './../../../utils/model.base'
import { RoomModel } from './../room/room.model'

@Injectable()
export class RoomBookingModel extends BaseModel {
  static tableName = TABLE_NAMES.roomBooking

  id: number
  roomId: number
	bookedFrom: string
	bookedTo: string

	room: RoomModel

  static relationMappings = {
    room: {
      relation: Model.BelongsToOneRelation,
      modelClass: path.join(__dirname, '../room/room.model'),
      join: {
				from: `${RoomBookingModel.tableName}.room_id`,
        to: `${TABLE_NAMES.room}.id`,
      }
    },
  }
}
