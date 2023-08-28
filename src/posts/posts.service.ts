import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './posts.repository';

@Injectable()
export class PostsService  {
  constructor(private readonly repository: PostRepository) { }

  async create(data: CreatePostDto) {
    return await this.repository.create(data)
  }

  async findAll() {
    return await this.repository.findAll()
  }

  async findOne(id: number) {
    return await this.repository.findOne(id)
  }

  async update(id: number, data: CreatePostDto) {
    return await this.repository.update(id,data)
  }

  async remove(id: number) {
    return await this.repository.remove(id)
  }
}
