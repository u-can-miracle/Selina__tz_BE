import { Injectable } from '@nestjs/common'
import { Model } from 'objection'
import * as path from 'path'

import { TABLE_NAMES } from '../../../../db/dbData'
import { BaseModel } from '../../../utils/model.base'
import { CityModel } from '../city/city.model'
import { CountryModel } from '../country/country.model'
import { EstateModel } from '../estate/estate.model'

@Injectable()
export class CountryCityModel extends BaseModel {
  static tableName = TABLE_NAMES.countryCity

  id: number
	cityId: number
	countryId: number

	city: CityModel
	country: CountryModel
	estates: EstateModel[]

  static relationMappings = {
    city: {
      relation: Model.BelongsToOneRelation,
      modelClass: path.join(__dirname, '../city/city.model'),
      join: {
				from: `${CountryCityModel.tableName}.city_id`,
        to: `${TABLE_NAMES.city}.id`
      }
    },
    country: {
      relation: Model.BelongsToOneRelation,
      modelClass: path.join(__dirname, '../country/country.model'),
      join: {
				from: `${CountryCityModel.tableName}.country_id`,
        to: `${TABLE_NAMES.country}.id`,
      }
    },
		estates: {
      relation: Model.HasManyRelation,
      modelClass: path.join(__dirname, '../estate/estate.model'),
      join: {
        from: `${CountryCityModel.tableName}.id`,
        to: `${TABLE_NAMES.estate}.country_city_id`,
      }
    }
  }
}
