export interface IConfig {
	appName: string
	db: {
		host: string
		port: number
		database: string
		user: string
		password: string
	}
}

export const CONFIG = 'config'

export const config: IConfig = {
	appName: process.env.APP_NAME,
	db: {
		host: process.env.DB_HOST,
		port: Number.parseInt(process.env.DB_PORT),
		database: process.env.DB_DATABASE,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
	}
}
