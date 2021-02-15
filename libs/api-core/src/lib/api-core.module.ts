import { Module } from '@nestjs/common';

import { HttpModule } from './http.module';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [],

  exports: []
})
export class ApiCoreModule {}
