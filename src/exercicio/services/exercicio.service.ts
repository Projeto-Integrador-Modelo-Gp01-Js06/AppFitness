import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Exercicio } from '../entities/exercicio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ExercicioService {
  constructor(
    @InjectRepository(Exercicio)
    private exercicioRepository: Repository<Exercicio>,
  ) {}

  async findAll(): Promise<Exercicio[]> {
    return this.exercicioRepository.find({
      relations: {
        categoria: true,
      },
    });
  }

  async findById(id: number): Promise<Exercicio> {
    const exercicio = await this.exercicioRepository.findOne({
      where: {
        id,
      },
      relations: {
        categoria: true,
      },
    });

    if (!exercicio) {
      throw new HttpException(
        'Exercício não encontrado!',
        HttpStatus.NOT_FOUND,
      );
    }

    return exercicio;
  }

  async create(exercicio: Exercicio): Promise<Exercicio> {
    return this.exercicioRepository.save(exercicio);
  }

  async update(exercicio: Exercicio): Promise<Exercicio> {
    await this.findById(exercicio.id);
    return this.exercicioRepository.save(exercicio);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return this.exercicioRepository.delete(id);
  }
}
