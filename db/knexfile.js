require('dotenv').config({
  path: `${__dirname}/../.env`,
})
const { knexSnakeCaseMappers } = require('objection');

module.exports = {
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: Number.parseInt(process.env.DB_PORT, 10) || 5432,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    timezone: 'UTC',
  },
  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
	// ...knexSnakeCaseMappers()
}
