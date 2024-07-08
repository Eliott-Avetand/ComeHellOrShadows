import { Injectable } from '@nestjs/common';
import { CreateReadingPreferenceDto } from './dto/create-reading_preference.dto';
import { UpdateReadingPreferenceDto } from './dto/update-reading_preference.dto';

@Injectable()
export class ReadingPreferencesService {
  create(createReadingPreferenceDto: CreateReadingPreferenceDto) {
    return 'This action adds a new readingPreference';
  }

  findAll() {
    return `This action returns all readingPreferences`;
  }

  findOne(id: number) {
    return `This action returns a #${id} readingPreference`;
  }

  update(id: number, updateReadingPreferenceDto: UpdateReadingPreferenceDto) {
    return `This action updates a #${id} readingPreference`;
  }

  remove(id: number) {
    return `This action removes a #${id} readingPreference`;
  }
}
