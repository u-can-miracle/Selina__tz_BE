const tableName = 'city'

// const contries = [
// 	'Guatemala', // id=1
// 	'Panama', // id=2
// 	'Mexico', // id=3
// 	'Colambia', // id=4
// 	'Nicaragua', // id=5
// ]
const toInsert = [
	{
		name: 'Antigua',
		country_id: 1,
	},
	{
		name: 'Bocas Del Toro',
		country_id: 2,
	},
	{
		name: 'Cancun',
		country_id: 3,
	},
	{
		name: 'Cartagena',
		country_id: 4,
	},
	{
		name: 'Granada',
		country_id: 5,
	},
]

exports.seed = function seed(knex){
	return knex(tableName).insert(toInsert.map(item => ({
		...item,
		created_at: knex.fn.now(),
		updated_at: knex.fn.now(),
	})))
}
