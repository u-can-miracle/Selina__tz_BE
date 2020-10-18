import { Module } from '@nestjs/common'

import { CityController } from './city.controller'
import { CityService } from './city.service'
import { CityRepository } from './city.repository'
import { CityModel } from './city.model'
import importModel from '../../../utils/model.import'

const modelProviders = [
	CityModel,
].map(importModel)

const providers = [
	CityService,
	CityRepository,
	...modelProviders,
]

@Module({
	exports: [...providers],
  controllers: [CityController],
  providers: [...providers],
})
export class CityModule {}
