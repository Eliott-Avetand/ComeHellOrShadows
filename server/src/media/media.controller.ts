import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { MediaService } from './media.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/users/roles/roles.guard';
import { Roles } from 'src/users/roles/roles.decorator';
import { ROLES } from 'src/users/roles/roles.enum';
import { Media } from './entities/media.entity';
import * as path from 'path';
import * as fs from 'fs';

@Controller('media')
@UseGuards(JwtAuthGuard)
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Get()
  @Roles(ROLES.User)
  async findAll(@Res() res: Response) {
    const medias: Media[] = await this.mediaService.findAll();

    const mediasWithFileBuffer = medias.map((media) => {
      const mediaPath = path.resolve(media.media_path);

      // Check if file exists
      if (!fs.existsSync(mediaPath)) throw new Error('File not found.');

      const fileBuffer = fs.readFileSync(mediaPath);
      return {
        ...media,
        fileBuffer: fileBuffer.toString('base64'),
      };
    });
    return res.status(200).send(mediasWithFileBuffer);
  }
}
