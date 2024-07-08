import { PartialType } from '@nestjs/mapped-types';
import { CreateReadingPreferenceDto } from './create-reading_preference.dto';

export class UpdateReadingPreferenceDto extends PartialType(CreateReadingPreferenceDto) {}
