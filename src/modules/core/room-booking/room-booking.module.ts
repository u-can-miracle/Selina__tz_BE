import { Module } from '@nestjs/common'

import { RoomBookingController } from './room-booking.controller'
import { RoomBookingService } from './room-booking.service'
import { RoomBookingRepository } from './room-booking.repository'
import { RoomBookingModel } from './room-booking.model'

import importModel from '../../../utils/model.import'

const modelProviders = [
	RoomBookingModel,
].map(importModel)

const providers = [
	RoomBookingService,
	RoomBookingRepository,
	...modelProviders,
]

@Module({
	exports: [...providers],
  controllers: [RoomBookingController],
  providers: [...providers],
})
export class RoomBookingModule {}
