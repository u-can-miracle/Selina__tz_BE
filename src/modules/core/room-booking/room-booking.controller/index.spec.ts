import { Test } from '@nestjs/testing'

import { RoomBookingController } from './index'
import { RoomBookingService } from '../room-booking.service'
import { RoomBookingRepository } from '../room-booking.repository'

import { IRequest } from '../../../../utils/interfaces'

describe('RoomBookingController', () => {
  let roomBookingController: RoomBookingController
	const req = {
		body: {
			roomId: 1,
			from: '2020-10-21',
			to: '2020-10-22',
		}
	}

	async function prepareMock(repoMockResult) {
		const repoMock = {
			getRoomBookingsForInterval: () =>  Promise.resolve(repoMockResult),
			common: ({
				create: data => data,
			}),
		}
		const providers = [
			RoomBookingRepository,
			RoomBookingService,
		]
		const moduleRef = await Test.createTestingModule({
			controllers: [RoomBookingController],
			providers,
		})
			.overrideProvider(RoomBookingRepository)
			.useValue(repoMock)
			.compile()

		roomBookingController = moduleRef.get<RoomBookingController>(
			RoomBookingController,
		)
	}

  describe('bookRoom', () => {
    it('should return { isAlreadyBooked: true } if time have already booked', async () => {
			await prepareMock([{ room_id: 1 }])

			const actualResult = await roomBookingController.bookRoom(req as IRequest)
			const expectedResult = {
				isAlreadyBooked: true,
			}
      expect(actualResult).toEqual(expectedResult)
    })

    it('should return { isAlreadyBooked: false, data } if time haven\'t booked yet', async () => {
			await prepareMock([])

			const actualResult = await roomBookingController.bookRoom(req as IRequest)
			const expectedResult = {
				isAlreadyBooked: false,
				data: {
					room_id: req.body.roomId,
					booked_from: req.body.from,
					booked_to: req.body.to,
				},
			}
      expect(actualResult).toEqual(expectedResult)
    })
  })
})
