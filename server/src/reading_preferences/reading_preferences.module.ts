import { Module } from '@nestjs/common';
import { ReadingPreferencesService } from './reading_preferences.service';
import { ReadingPreferencesController } from './reading_preferences.controller';

@Module({
  controllers: [ReadingPreferencesController],
  providers: [ReadingPreferencesService],
})
export class ReadingPreferencesModule {}
