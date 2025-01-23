import { Transform, TransformFnParams } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsPositive, Min } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { NumericTransformer } from "../../util/numerictransformer";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({ name: "tb_exercicios" })
export class Exercicio {
    @PrimaryGeneratedColumn()
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    nome: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @Column({ length: 1000 })
    descricao: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    @Column({ type: "int", nullable: false })
    tempo: number;

    @IsInt()
    @IsNotEmpty()
    @Min(0)
    @Column({ type: "int", nullable: false })
    serie: number;

    @IsInt()
    @IsNotEmpty()
    @Min(0)
    @Column({ type: "int", nullable: false })
    repeticoes: number;

    @IsNumber({ maxDecimalPlaces: 2 })
    @IsNotEmpty()
    @Min(0)
    @Column({ type: "decimal", precision: 10, scale: 2, transformer: new NumericTransformer() })
    peso: number;

    @IsInt()
    @IsNotEmpty()
    @Min(0)
    @Column({ type: "int", nullable: false })
    descanso: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 500, nullable: false })
    midia: string;

    @UpdateDateColumn()
    data: Date;

    @ManyToOne(() => Categoria, (categoria) => categoria.exercicio, {
        onDelete: "CASCADE",
        
    })
    categoria: Categoria;
}
