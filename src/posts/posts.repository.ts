import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";


@Injectable()
export class PostRepository{
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreatePostDto) {
        await this.prisma.posts.create({
            data
        })
        return "created!"
    }

   async findAll() {
       return await this.prisma.posts.findMany()
    }

   async findOne(id: number) {
        return await this.prisma.posts.findMany()
    }

    async update(id: number, data: UpdatePostDto) {
        return await this.prisma.posts.update({
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