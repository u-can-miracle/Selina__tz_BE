import { Injectable } from '@nestjs/common'
import { Model } from 'objection'
import * as path from 'path'

import { TABLE_NAMES } from '../../../../db/dbData'
import { BaseModel } from '../../../utils/model.base'
import { CityModel } from '../city/city.model'

@Injectable()
export class CountryModel extends BaseModel {
  static tableName = TABLE_NAMES.country

  id: number
  name: string

	cities: CityModel[]

  static relationMappings = {
    cities: {
      relation: Model.HasManyRelation,
      modelClass: path.join(__dirname, '../city/city.model'),
      join: {
				from: `${CountryModel.tableName}.id`,
        to: `${TABLE_NAMES.city}.country_id`,
      },
    },
  }
}
