import {
	Controller,
	Get,
	Inject,
} from '@nestjs/common'

import { CountryService } from './country.service'
import { CountryModel } from './country.model'

@Controller('country')
export class CountryController {
	constructor(
		@Inject(CountryService) private readonly countryService: CountryService,
	) {}

	@Get()
  async findAll(): Promise<CountryModel[]> {
    return this.countryService.findAll()
  }

	@Get('city/estate')
  async findAllWithCitiesAndEstate(): Promise<CountryModel[]> {
    return this.countryService.findAllWithCitiesAndEstate()
  }
}
