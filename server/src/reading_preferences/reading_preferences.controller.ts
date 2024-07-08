import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReadingPreferencesService } from './reading_preferences.service';
import { CreateReadingPreferenceDto } from './dto/create-reading_preference.dto';
import { UpdateReadingPreferenceDto } from './dto/update-reading_preference.dto';

@Controller('reading-preferences')
export class ReadingPreferencesController {
  constructor(private readonly readingPreferencesService: ReadingPreferencesService) {}

  @Post()
  create(@Body() createReadingPreferenceDto: CreateReadingPreferenceDto) {
    return this.readingPreferencesService.create(createReadingPreferenceDto);
  }

  @Get()
  findAll() {
    return this.readingPreferencesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.readingPreferencesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReadingPreferenceDto: UpdateReadingPreferenceDto) {
    return this.readingPreferencesService.update(+id, updateReadingPreferenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.readingPreferencesService.remove(+id);
  }
}
