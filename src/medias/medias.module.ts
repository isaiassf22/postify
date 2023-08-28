import { Module } from '@nestjs/common';
import { MediasService } from './medias.service';
import { MediasController } from './medias.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { mediasRepository } from './medias.repository';

@Module({
  controllers: [MediasController],
  providers: [MediasService,mediasRepository],
  imports:[PrismaModule]
})
export class MediasModule {}
