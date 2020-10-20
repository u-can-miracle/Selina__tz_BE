import { Injectable } from '@nestjs/common'
import { Model } from 'objection'
import * as path from 'path'

import { TABLE_NAMES } from '../../../../db/dbData'
import { BaseModel } from '../../../utils/model.base'
import { CountryModel } from '../country/country.model'
import { CountryCityModel } from '../country-city/country-city.model'

@Injectable()
export class CityModel extends BaseModel {
  static tableName = TABLE_NAMES.city

  id: number
  name: string
	countryId: number

	country: CountryModel
	countryCity: CountryCityModel

  static relationMappings = {
		country: {
			relation: Model.BelongsToOneRelation,
			modelClass: path.join(__dirname, '../country/country.model'),
			join: {
				from: `${CityModel.tableName}.country_id`,
				to: `${TABLE_NAMES.country}.id`,
			}
		},
		countryCity: {
			relation: Model.HasOneRelation,
			modelClass: path.join(__dirname, '../country-city/country-city.model'),
			join: {
				from: `${CityModel.tableName}.id`,
				to: `${TABLE_NAMES.countryCity}.city_id`,
			}
		},
  }
}
