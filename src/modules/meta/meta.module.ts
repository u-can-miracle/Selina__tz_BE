import { Global, Module, Provider } from '@nestjs/common'
import * as knex from 'knex'
import { Model } from 'objection'

import { config, CONFIG, IConfig } from './config'
import createLogger, { APP_LOGGER } from './logger'
import { DATABASE_CONNECTION } from './db'

const customProviders: Provider[] = [
  {
    provide: CONFIG,
    useValue: config,
  },
  {
    provide: APP_LOGGER,
    useFactory: (conf: IConfig) => {
      return createLogger({ name: conf.appName })
    },
    inject: [CONFIG]
  },
	{
		provide: DATABASE_CONNECTION,
		useFactory: async (conf: IConfig) => {
			const connection = knex({
				client: 'postgresql',
				connection: {
					host: conf.db.host,
					port: conf.db.port,
					database: conf.db.database,
					user: conf.db.user,
					password: conf.db.password,
					timezone: 'UTC'
				},
				migrations: {
					directory: '../../../db/migrations'
				},
				seeds: {
					directory: '../../../db/seeds'
				},
		  })
			Model.knex(connection)
			return connection
		},
		inject: [CONFIG]
	}
]

@Global()
@Module({
  providers: [...customProviders],
  exports: [...customProviders],
})
export class MetaModule {}
