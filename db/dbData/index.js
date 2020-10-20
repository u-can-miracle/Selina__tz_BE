const TABLE_NAMES = {
	country: 'country',
	city: 'city',
	countryCity: 'country_city',
	estate: 'estate',
	roomType: 'room_type',
	room: 'room',
	roomBooking: 'room_booking',
}

const contries = [
	'Guatemala', // id=1
	'Panama', // id=2
	'Mexico', // id=3
	'Colambia', // id=4
	'Nicaragua', // id=5
]

const cities = [
	{
		id: 1,
		name: 'Antigua',
		country_id: 1,
	},
	{
		id: 2,
		name: 'Bocas Del Toro',
		country_id: 2,
	},
	{
		id: 3,
		name: 'Cancun',
		country_id: 3,
	},
	{
		id: 4,
		name: 'Cartagena',
		country_id: 4,
	},
	{
		id: 5,
		name: 'Granada',
		country_id: 5,
	},
]

const ROOM_TYPE_NAMES = {
	DORM: 'Dorm',
	PRIVATE: 'Private',
	DELUXE: 'Deluxe',
}
const centsinOneUSD = 100
const roomTypes = [
	{
		id: 1,
		name: ROOM_TYPE_NAMES.DORM,
		price: 10 * centsinOneUSD,
	},
	{
		id: 2,
		name: ROOM_TYPE_NAMES.PRIVATE,
		price: 20 * centsinOneUSD,
	},
	{
		id: 3,
		name: ROOM_TYPE_NAMES.DELUXE,
		price: 30 * centsinOneUSD,
	},
]
const ROOMS_COUNT = 10

module.exports = {
	TABLE_NAMES,
	contries,
	cities,
	roomTypes,
	ROOMS_COUNT,
	ROOM_TYPE_NAMES,
}
