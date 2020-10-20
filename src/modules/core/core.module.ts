import { Module } from '@nestjs/common'
import { CityModule } from './city/city.module'
import { CountryModule } from './country/country.module'
import { CountryCityModule } from './country-city/country-city.module'
import { EstateModule } from './estate/estate.module'
import { RoomTypeModule } from './room-type/room-type.module'
import { RoomModule } from './room/room.module'
import { RoomBookingModule } from './room-booking/room-booking.module'

@Module({
  imports: [
		CityModule,
		CountryModule,
		CountryCityModule,
		EstateModule,
		RoomTypeModule,
		RoomModule,
		RoomBookingModule,
	],
})
export class CoreModule {}
