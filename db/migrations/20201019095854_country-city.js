const { TABLE_NAMES } = require('../dbData')

const tableName = TABLE_NAMES.countryCity

exports.up = function up(knex){
	return knex.raw(`
		CREATE TABLE ${tableName} (
				id serial primary key,
				country_id int NOT NULL,
				city_id int NOT NULL,
				created_at timestamp without time zone NOT NULL,
				updated_at timestamp without time zone NOT NULL,
				deleted_at timestamp without time zone NULL,

				unique (country_id, city_id),

				CONSTRAINT fk_country FOREIGN KEY(country_id) REFERENCES country(id),
				CONSTRAINT fk_city FOREIGN KEY(city_id) REFERENCES city(id)
		);
	`)
}

exports.down = function down(knex){
	return knex.schema.dropTableIfExists(tableName)
}
