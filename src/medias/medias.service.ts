import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { mediasRepository } from './medias.repository';

@Injectable()
export class MediasService {

  constructor(private readonly repository: mediasRepository) { }

  async create(data: CreateMediaDto) {
    
    const check = await this.repository.verify(data)
    if(check){
      throw new HttpException('postagem ja exite para este usuario',HttpStatus.CONFLICT)
    }
    return await this.repository.create(data)
  }

  async findAll() {
    return await this.repository.findAll()
  }

  async findOne(id: number) {
    return await this.repository.findOne(id)
  }

  async update(id: number, data: UpdateMediaDto) {
    return await this.repository.update(id,data)
  }

  async remove(id: number) {
    return await this.repository.remove(id)
  }
}
