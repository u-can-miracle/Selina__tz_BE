const { contries, TABLE_NAMES } = require('../dbData')

const tableName = TABLE_NAMES.country

exports.seed = function seed(knex){
	return knex(tableName).insert(contries.map(c => ({
		name: c,
		created_at: knex.fn.now(),
		updated_at: knex.fn.now(),
	})))
}
