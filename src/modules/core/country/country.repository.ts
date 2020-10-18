import { Inject, Injectable } from '@nestjs/common'
import { repositoryFactory } from 'objection-repositories'

import { DATABASE_CONNECTION } from '../../meta/db'
import { CountryModel } from './country.model'
import { ICountry } from './interfaces'

@Injectable()
export class CountryRepository {
	common = null

	constructor(
		@Inject(DATABASE_CONNECTION) private readonly connection,
		@Inject(CountryModel) private readonly countryModel,
	) {
		this.common = repositoryFactory.getRepository<ICountry>(
			connection,
			countryModel,
		)
	}
}
