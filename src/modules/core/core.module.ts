import { Module } from '@nestjs/common'
import { CityModule } from './city/city.module'
import { CountryModule } from './country/country.module'

@Module({
  imports: [
		CityModule,
		CountryModule,
	],
})
export class CoreModule {}
