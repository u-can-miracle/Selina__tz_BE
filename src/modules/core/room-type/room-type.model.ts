import { Injectable } from '@nestjs/common'
import { Model } from 'objection'
import * as path from 'path'

import { TABLE_NAMES } from '../../../../db/dbData'
import { BaseModel } from '../../../utils/model.base'
import { RoomModel } from '../room/room.model'

@Injectable()
export class RoomTypeModel extends BaseModel {
  static tableName = TABLE_NAMES.country

  id: number
  name: string
  priceInUsdCents: number

	rooms: RoomModel[]

  static relationMappings = {
    rooms: {
      relation: Model.HasManyRelation,
      modelClass: path.join(__dirname, '../room/room.model'),
      join: {
				from: `${RoomTypeModel.tableName}.id`,
        to: `${TABLE_NAMES.room}.type_id`,
      }
    }
  }
}
