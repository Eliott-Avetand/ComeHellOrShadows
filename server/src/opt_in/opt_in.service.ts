import { Injectable } from '@nestjs/common';
import { CreateOptInDto } from './dto/create-opt_in.dto';
import { UpdateOptInDto } from './dto/update-opt_in.dto';

@Injectable()
export class OptInService {
  create(createOptInDto: CreateOptInDto) {
    return 'This action adds a new optIn';
  }

  findAll() {
    return `This action returns all optIn`;
  }

  findOne(id: number) {
    return `This action returns a #${id} optIn`;
  }

  update(id: number, updateOptInDto: UpdateOptInDto) {
    return `This action updates a #${id} optIn`;
  }

  remove(id: number) {
    return `This action removes a #${id} optIn`;
  }
}
