import { Module } from '@nestjs/common'

import { RoomController } from './room.controller'
import { RoomService } from './room.service'
import { RoomRepository } from './room.repository'
import { RoomModel } from './room.model'
import importModel from '../../../utils/model.import'

const modelProviders = [
	RoomModel,
].map(importModel)

const providers = [
	RoomService,
	RoomRepository,
	...modelProviders,
]

@Module({
	exports: [...providers],
  controllers: [RoomController],
  providers: [...providers],
})
export class RoomModule {}
