import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "../entities/categoria.entity";
import { ILike, Repository,DeleteResult } from "typeorm";

@Injectable()
export class CategoriaService{
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>,
    ) { }

    async findAll(): Promise<Categoria[]> {
        return this.categoriaRepository.find({
            relations: {
                exercicio: true,
            }

        })

    }

    async findById(id: number): Promise<Categoria> {
        const Categoria = await this.categoriaRepository.findOne({
            where: {
                id,
            },
            relations: {
                exercicio: true,
            },
        });

        if (!Categoria)
            throw new HttpException(
                'Categoria não encontrada',
                HttpStatus.NOT_FOUND,

            );
        return Categoria;

    }

    async findByCategoria(nome: string): Promise<Categoria[]> {
        const categoria = await this.categoriaRepository.find({
            where: {
                nome: ILike(`%${nome}%`),
            },
            relations:{
                exercicio:true,
            },
        })

        return categoria;
    }

    async create(categoria:Categoria):Promise<Categoria>{
        return await this.categoriaRepository.save(categoria)
    }

    async update(categoria:Categoria):Promise<Categoria>{
        await this.findById(categoria.id);

        return await this.categoriaRepository.save(categoria);
    }

    async delete(id:number):Promise<DeleteResult>{
        await this.findById(id);
        return await this.categoriaRepository.delete(id);
    }
}
