import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OptInService } from './opt_in.service';
import { CreateOptInDto } from './dto/create-opt_in.dto';
import { UpdateOptInDto } from './dto/update-opt_in.dto';

@Controller('opt-in')
export class OptInController {
  constructor(private readonly optInService: OptInService) {}

  @Post()
  create(@Body() createOptInDto: CreateOptInDto) {
    return this.optInService.create(createOptInDto);
  }

  @Get()
  findAll() {
    return this.optInService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.optInService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOptInDto: UpdateOptInDto) {
    return this.optInService.update(+id, updateOptInDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.optInService.remove(+id);
  }
}
