const { TABLE_NAMES } = require('../dbData')

const tableName = TABLE_NAMES.country

exports.up = function up(knex){
	return knex.schema.createTable(tableName, t => {
		t.increments()

		t.string('name').notNullable().unique()

		t.timestamp('created_at', true).notNullable()
		t.timestamp('updated_at', true).notNullable()
		t.timestamp('deleted_at', true).nullable()
	})
}

exports.down = function down(knex){
	return knex.schema.dropTableIfExists(tableName)
}
