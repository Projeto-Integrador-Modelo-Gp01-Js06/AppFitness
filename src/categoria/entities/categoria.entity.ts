import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Exercicio } from "../../exercicio/entities/exercicio.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity ({ name:'tb_categorias'})
export class Categoria {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Transform(({ value }: TransformFnParams ) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 100, nullable: false})
    nome: string;
    
    @ApiProperty({type: () => Exercicio})
    @OneToMany(() => Exercicio, (exercicio) => exercicio.categoria)
    exercicio: Exercicio[];

}