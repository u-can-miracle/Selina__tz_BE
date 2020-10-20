import { Module } from '@nestjs/common'

import { CountryCityModel } from './country-city.model'
import importModel from '../../../utils/model.import'

const modelProviders = [
	CountryCityModel,
].map(importModel)

const providers = [
	...modelProviders,
]

@Module({
	exports: [...providers],
  controllers: [],
  providers: [...providers],
})
export class CountryCityModule {}
