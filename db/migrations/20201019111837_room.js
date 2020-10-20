const { TABLE_NAMES } = require('../dbData')

const tableName = TABLE_NAMES.room

exports.up = function up(knex){
	return knex.schema.createTable(tableName, t => {
		t.increments()

		t.integer('estate_id')
			.unsigned()
			.index()
			.references('id')
			.inTable(TABLE_NAMES.estate)
		t.integer('type_id')
			.unsigned()
			.index()
			.references('id')
			.inTable(TABLE_NAMES.roomType)

		t.timestamp('created_at', true).notNullable()
		t.timestamp('updated_at', true).notNullable()
		t.timestamp('deleted_at', true).nullable()
	})
}

exports.down = function down(knex){
	return knex.schema.dropTableIfExists(tableName)
}
