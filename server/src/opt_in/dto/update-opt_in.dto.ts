import { PartialType } from '@nestjs/mapped-types';
import { CreateOptInDto } from './create-opt_in.dto';

export class UpdateOptInDto extends PartialType(CreateOptInDto) {}
