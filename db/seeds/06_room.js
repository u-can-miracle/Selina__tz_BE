const {
	cities,
	roomTypes,
	TABLE_NAMES,
	ROOMS_COUNT,
} = require('../dbData')

const tableName = TABLE_NAMES.room

function getRooms(roomCount) {
	const rooms = []

	for (let cityIndex = 0; cityIndex < cities.length; cityIndex++) {
		const currentCity = cities[cityIndex]

		// only one estate in one city
		// thats why estate has same id as corresponding city
		const estateId = currentCity.id

		for (let roomIndex = 0; roomIndex < roomCount; roomIndex++) {
			for (let roomTypeIndex = 0; roomTypeIndex < roomTypes.length; roomTypeIndex++) {
				const currentRoomType = roomTypes[roomTypeIndex]

				rooms.push({
					estate_id: estateId,
					type_id: currentRoomType.id
				})
			}
		}
	}

	return rooms
}

exports.seed = function seed(knex){
	const allRooms = getRooms(ROOMS_COUNT)

	return knex(tableName).insert(allRooms.map(room => ({
		...room,
		created_at: knex.fn.now(),
		updated_at: knex.fn.now(),
	})))
}
