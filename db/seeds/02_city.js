const { cities, TABLE_NAMES } = require('../dbData')

const tableName = TABLE_NAMES.city

exports.seed = function seed(knex){
	return knex(tableName).insert(cities.map(item => ({
		name: item.name,
		country_id: item.country_id,
		created_at: knex.fn.now(),
		updated_at: knex.fn.now(),
	})))
}
