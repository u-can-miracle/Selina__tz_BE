const { roomTypes, TABLE_NAMES } = require('../dbData')

const tableName = TABLE_NAMES.roomType

exports.seed = function seed(knex){
	return knex(tableName).insert(roomTypes.map(roomType => ({
		name: roomType.name,
		price_in_usd_cents: roomType.price,
		created_at: knex.fn.now(),
		updated_at: knex.fn.now(),
	})))
}
