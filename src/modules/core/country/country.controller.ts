import {
	Controller,
	Get,
	Inject,
} from '@nestjs/common'

import { CountryService } from './country.service'
import { ICountry } from './interfaces'

@Controller('country')
export class CountryController {
	constructor(
		@Inject(CountryService) private readonly countryService: CountryService,
	) {}

	@Get()
  async findAll(): Promise<ICountry[]> {
    return this.countryService.findAll()
  }
}
