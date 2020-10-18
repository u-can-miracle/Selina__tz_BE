import { Injectable } from '@nestjs/common'
import * as objection from 'objection'
import * as path from 'path'

import { BaseModel } from '../../../utils/model.base'
import { ICountry } from '../country/interfaces'

@Injectable()
export class CityModel extends BaseModel {
  static tableName = 'city'

  id: number
  name: string
	countryId: number
	country: ICountry

  static relationMappings = {
    country: {
      relation: objection.Model.HasOneRelation,
      modelClass: path.join(__dirname, '../country/country.model'),
      join: {
				from: `${CityModel.tableName}.country_id`,
        to: 'country.id'
      }
    }
  }
}
