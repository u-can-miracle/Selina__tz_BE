import { Injectable } from '@nestjs/common'
import { Model } from 'objection'
import * as path from 'path'

import { TABLE_NAMES } from '../../../../db/dbData'
import { BaseModel } from '../../../utils/model.base'
import { RoomModel } from '../room/room.model'
import { CountryCityModel } from '../country-city/country-city.model'

@Injectable()
export class EstateModel extends BaseModel {
  static tableName = TABLE_NAMES.estate

  id: number
  name: string
	countryCityId: number

	rooms: RoomModel[]
	countryCity: CountryCityModel

  static relationMappings = {
    rooms: {
      relation: Model.BelongsToOneRelation,
      modelClass: path.join(__dirname, '../room/room.model'),
      join: {
				from: `${EstateModel.tableName}.id`,
        to: `${TABLE_NAMES.room}.estate_id`
      }
    },
    countryCity: {
      relation: Model.BelongsToOneRelation,
      modelClass: path.join(__dirname, '../country-city/country-city.model'),
      join: {
				from: `${EstateModel.tableName}.country_city_id`,
        to: `${TABLE_NAMES.countryCity}.id`
      }
    },
  }
}
