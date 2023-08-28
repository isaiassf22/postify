import { Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { publicationRepository } from './publication.repository';

@Injectable()
export class PublicationService {

  constructor(private readonly repository: publicationRepository) { }

  async create(data: CreatePublicationDto) {
    return await this.repository.create(data)
  }

  async findAll() {
    return await this.repository.findAll()
  }

  async findOne(id: number) {
    return await this.repository.findOne(id)
  }

  async update(id: number, data: UpdatePublicationDto) {
    return await this.repository.update(id,data)
  }

  async remove(id: number) {
    return await this.repository.remove(id)
  }
 
}
