import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Exercicio } from "../../exercicio/entities/exercicio.entity";

@Entity ({ name:'tb_categorias'})
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Transform(({ value }: TransformFnParams ) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 100, nullable: false})
    nome: string;
    
    @OneToMany(() => Exercicio, (exercicio) => exercicio.categoria)
    exercicio: Exercicio[];

}