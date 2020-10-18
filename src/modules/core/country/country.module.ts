import { Module } from '@nestjs/common'

import { CountryController } from './country.controller'
import { CountryService } from './country.service'
import { CountryRepository } from './country.repository'
import { CountryModel } from './country.model'
import importModel from '../../../utils/model.import'

const modelProviders = [
	CountryModel,
].map(importModel)

const providers = [
	CountryService,
	CountryRepository,
	...modelProviders,
]

@Module({
	exports: [...providers],
  controllers: [CountryController],
  providers: [...providers],
})
export class CountryModule {}
