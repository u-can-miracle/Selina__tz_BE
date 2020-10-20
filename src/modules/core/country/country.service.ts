import { Injectable, Inject } from '@nestjs/common'

import { CountryRepository } from './country.repository'
import { CountryModel } from './country.model'

@Injectable()
export class CountryService {
	constructor(
		@Inject(CountryRepository) private readonly countryRepository: CountryRepository,
	) {}

  findAll(): CountryModel[] {
    return this.countryRepository.common.find({})
  }

  findAllWithCitiesAndEstate(): Promise<CountryModel[]> {
    return this.countryRepository.findAllWithCitiesAndEstate()
  }
}
