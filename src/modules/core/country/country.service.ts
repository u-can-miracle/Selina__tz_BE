import { Injectable, Inject } from '@nestjs/common'

import { CountryRepository } from './country.repository'
import { ICountry } from './interfaces'

@Injectable()
export class CountryService {
	constructor(
		@Inject(CountryRepository) private readonly countryRepository: CountryRepository,
	) {}

  findAll(): ICountry[] {
    return this.countryRepository.common.find({})
  }
}
