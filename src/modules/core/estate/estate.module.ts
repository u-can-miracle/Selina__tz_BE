import { Module } from '@nestjs/common'

import { EstateModel } from './estate.model'
import importModel from '../../../utils/model.import'

const modelProviders = [
	EstateModel,
].map(importModel)

const providers = [
	...modelProviders,
]

@Module({
	exports: [...providers],
  controllers: [],
  providers: [...providers],
})
export class EstateModule {}
