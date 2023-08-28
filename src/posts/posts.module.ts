import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PostRepository } from './posts.repository';

@Module({
  controllers: [PostsController],
  providers: [PostsService,PostRepository],
  imports:[PrismaModule]
})
export class PostsModule {}
