import { Module } from '@nestjs/common';
import { OptInService } from './opt_in.service';
import { OptInController } from './opt_in.controller';

@Module({
  controllers: [OptInController],
  providers: [OptInService],
})
export class OptInModule {}
