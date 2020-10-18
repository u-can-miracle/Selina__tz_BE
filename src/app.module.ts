import { Module } from '@nestjs/common'

import { MetaModule } from './modules/meta/meta.module'
import { CoreModule } from './modules/core/core.module'

@Module({
  imports: [
		MetaModule,
		CoreModule,
	],
})
export class AppModule {}
