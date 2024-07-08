import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Media } from './entities/media.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MediaService {
    constructor(@InjectRepository(Media) private media: Repository<Media>) {}

    create(createMediaDto: CreateMediaDto) {
      	return 'This action adds a new media';
  	}

	findAll(): Promise<Media[]> {
        return this.media.find({ where: { scope: "global" } });
    }

  	findOne(id: number) {
    	return `This action returns a #${id} media`;
  	}

  	update(id: number, updateMediaDto: UpdateMediaDto) {
    	return `This action updates a #${id} media`;
  	}

  	remove(id: number) {
    	return `This action removes a #${id} media`;
  	}
}
