import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePublicationDto } from "./dto/create-publication.dto";
import { UpdatePublicationDto } from "./dto/update-publication.dto";

@Injectable()
 export class publicationRepository{
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreatePublicationDto) {
        await this.prisma.publications.create({
            data
        })
    }

   async findAll() {
       return await this.prisma.publications.findMany()
    }

   async findOne(id: number) {
        return await this.prisma.publications.findMany()
    }

    async update(id: number, data: UpdatePublicationDto) {
        return await this.prisma.publications.update({
            where: {id},
            data
        })
    }

   async remove(id: number) {

        return await this.prisma.medias.delete({
            where: {id}
        })
    }
}