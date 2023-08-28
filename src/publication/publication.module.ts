import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { publicationRepository } from './publication.repository';

@Module({
  controllers: [PublicationController],
  providers: [PublicationService,publicationRepository],
  imports:[PrismaModule]
})
export class PublicationModule {}
