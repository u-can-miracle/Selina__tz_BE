const { TABLE_NAMES } = require('../dbData')

const tableName = TABLE_NAMES.estate

exports.up = function up(knex){
	return knex.schema.createTable(tableName, t => {
		t.increments()

		t.string('name').notNullable()
		t.integer('country_city_id')
			.unsigned()
			.index()
			.references('id')
			.inTable('country_city')

		t.timestamp('created_at', true).notNullable()
		t.timestamp('updated_at', true).notNullable()
		t.timestamp('deleted_at', true).nullable()
	})
}

exports.down = function down(knex){
	return knex.schema.dropTableIfExists(tableName)
}
