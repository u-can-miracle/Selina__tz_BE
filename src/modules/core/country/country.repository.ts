import { Inject, Injectable } from '@nestjs/common'
import { repositoryFactory } from 'objection-repositories'

import { DATABASE_CONNECTION } from '../../meta/db'
import { REPO_FACTORY } from './../../meta/repo.factory'
import { CountryModel } from './country.model'

@Injectable()
export class CountryRepository {
	common = null

	constructor(
		@Inject(DATABASE_CONNECTION) private readonly connection,
		@Inject(CountryModel) private readonly countryModel,
		@Inject(REPO_FACTORY) private readonly repFactory: repositoryFactory,
	) {
		this.common = this.repFactory.getRepository<CountryModel>(
			connection,
			countryModel,
		)
	}

	async findAllWithCitiesAndEstate(): Promise<CountryModel[]> {
		const result = await this.countryModel
			.query()
			.withGraphFetched('cities.[countryCity.[estates]]')

		return result
	}
}
