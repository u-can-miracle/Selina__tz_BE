import {
	Controller,
	Get,
	Inject,
} from '@nestjs/common'

import { CityService } from './city.service'
import { ICity } from './interfaces'

@Controller('city')
export class CityController {
	constructor(
		@Inject(CityService) private readonly cityService: CityService,
	) {}

	@Get()
  async findAll(): Promise<ICity[]> {
    return this.cityService.findAll()
  }

	@Get('country')
  async findAllWithCountries(): Promise<ICity[]> {
    return this.cityService.findAllWithCountries()
  }
}
