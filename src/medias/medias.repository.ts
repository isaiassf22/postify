import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateMediaDto } from "./dto/create-media.dto";
import { UpdateMediaDto } from "./dto/update-media.dto";


@Injectable()
export class mediasRepository {

    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateMediaDto) {
        await this.prisma.medias.create({
            data
        })
        return "created!"
    }

   async findAll() {
       return await this.prisma.medias.findMany()
    }

   async findOne(id: number) {
        return await this.prisma.medias.findMany()
    }

    async update(id: number, data: UpdateMediaDto) {
        return await this.prisma.medias.update({
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