const tableName = 'country'

const contries = [
	'Guatemala', // id=1
	'Panama', // id=2
	'Mexico', // id=3
	'Colambia', // id=4
	'Nicaragua', // id=5
]

exports.seed = function seed(knex){
	return knex(tableName).insert(contries.map(c => ({
		name: c,
		created_at: knex.fn.now(),
		updated_at: knex.fn.now(),
	})))
}
