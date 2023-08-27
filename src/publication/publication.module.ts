import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PublicationController],
  providers: [PublicationService],
  imports:[PrismaModule]
})
export class PublicationModule {}
