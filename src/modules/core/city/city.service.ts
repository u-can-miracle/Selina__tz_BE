import { Injectable, Inject } from '@nestjs/common'

import { CityRepository } from './city.repository'
import { ICity, ICityWithCountry } from './interfaces'

@Injectable()
export class CityService {
	constructor(
		@Inject(CityRepository) private readonly cityRepository: CityRepository,
	) {}

  findAll(): ICity[] {
    return this.cityRepository.common.find({})
  }

  findAllWithCountries(): Promise<ICityWithCountry[]> {
    return this.cityRepository.findWithCountries()
  }
}
