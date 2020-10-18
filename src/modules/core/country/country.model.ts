import { Injectable } from '@nestjs/common'
import { Model } from 'objection'
import * as path from 'path'

import { BaseModel } from '../../../utils/model.base'
import { ICity } from '../city/interfaces'

@Injectable()
export class CountryModel extends BaseModel {
  static tableName = 'country'

  id: number
  name: string
	city: ICity

  static relationMappings = {
    city: {
      relation: Model.HasOneRelation,
      modelClass: path.join(__dirname, '../city/city.model'),
      join: {
				from: `${CountryModel.tableName}.id`,
        to: 'city.countryId'
      }
    }
  }
}
