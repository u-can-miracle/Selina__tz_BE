import { Module } from '@nestjs/common'

import { RoomTypeModel } from './room-type.model'
import importModel from '../../../utils/model.import'

const modelProviders = [
	RoomTypeModel,
].map(importModel)

const providers = [
	...modelProviders,
]

@Module({
	exports: [...providers],
  controllers: [],
  providers: [...providers],
})
export class RoomTypeModule {}
