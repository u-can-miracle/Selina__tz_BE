import { Inject, Injectable } from '@nestjs/common'
import { repositoryFactory } from 'objection-repositories'

import { CityModel } from './city.model'
import { ICity, ICityWithCountry } from './interfaces'

import { DATABASE_CONNECTION } from '../../meta/db'
import { REPO_FACTORY } from './../../meta/repo.factory'

@Injectable()
export class CityRepository {
	common = null

	constructor(
		@Inject(DATABASE_CONNECTION) private readonly connection,
		@Inject(CityModel) private readonly cityModel,
		@Inject(REPO_FACTORY) private readonly repFactory: repositoryFactory,
	) {
		this.common = this.repFactory.getRepository<ICity>(
			connection,
			cityModel,
		)
	}

	async findWithCountries(): Promise<ICityWithCountry[]> {
		const result = await this.cityModel
			.query()
  		.withGraphFetched('country')

		return result
	}
}
