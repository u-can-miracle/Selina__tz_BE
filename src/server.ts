import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
		AppModule,
		{
			bodyParser: true,
		},
	)

	app.setGlobalPrefix('api')

	await app.listen(process.env.SERVER_PORT, () => {
		console.log(`Server is started on localhost:${process.env.SERVER_PORT}`)
	})
}

bootstrap()
