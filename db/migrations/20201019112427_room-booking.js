const { TABLE_NAMES } = require('../dbData')

const tableName = TABLE_NAMES.roomBooking

exports.up = function up(knex){
	return knex.schema.createTable(tableName, t => {
		t.increments()

		t.integer('room_id')
			.unsigned()
			.index()
			.references('id')
			.inTable(TABLE_NAMES.room)


		t.date('booked_from', true).notNullable()
		t.date('booked_to', true).notNullable()

		t.timestamp('created_at', true).notNullable()
		t.timestamp('updated_at', true).notNullable()
		t.timestamp('deleted_at', true).nullable()
	})
}

exports.down = function down(knex){
	return knex.schema.dropTableIfExists(tableName)
}
