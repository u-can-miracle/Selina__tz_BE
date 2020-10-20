const {
	cities,
	roomTypes,
	TABLE_NAMES,
	ROOMS_COUNT,
} = require('../dbData')

const tableName = TABLE_NAMES.roomBooking
const roomBookings = [
	{
		room_id: 1,
		booked_from: '2020-10-18',
		booked_to: '2020-10-20',
	},
	{
		room_id: 2,
		booked_from: '2020-10-18',
		booked_to: '2020-10-20',
	},
	{
		room_id: 3,
		booked_from: '2020-10-18',
		booked_to: '2020-10-20',
	},
]

exports.seed = function seed(knex){
	return knex(tableName).insert(roomBookings.map(roomBooking => ({
		...roomBooking,
		created_at: knex.fn.now(),
		updated_at: knex.fn.now(),
	})))
}
