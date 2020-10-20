const { cities, TABLE_NAMES } = require('../dbData')

const tableName = TABLE_NAMES.estate

exports.seed = function seed(knex){
	return knex(tableName).insert(cities.map(city => ({
		name: `${city.name} estate`,

		// for testing purposes: one country has one estate
		country_city_id: city.id,
		created_at: knex.fn.now(),
		updated_at: knex.fn.now(),
	})))
}
