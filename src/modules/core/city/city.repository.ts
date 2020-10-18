import { Inject, Injectable } from '@nestjs/common'
import { repositoryFactory } from 'objection-repositories'

import { DATABASE_CONNECTION } from '../../meta/db'
import { CityModel } from './city.model'
import { ICity, ICityWithCountry } from './interfaces'

@Injectable()
export class CityRepository {
	common = null

	constructor(
		@Inject(DATABASE_CONNECTION) private readonly connection,
		@Inject(CityModel) private readonly cityModel,
	) {
		this.common = repositoryFactory.getRepository<ICity>(
			connection,
			cityModel,
		)
	}

	async findWithCountries(): Promise<ICityWithCountry[]> {
		const result = await this.cityModel
			.query()
  		.withGraphFetched('country');

		return result
	}
}
