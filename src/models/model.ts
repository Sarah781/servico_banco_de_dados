import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Projeto {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    linguagem: string

    @Column()
    anoInicio: number

    @Column()
    anoFim: number
}

@Entity()
export class Pessoa {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    imagem: string

    @Column()
    descricao: string

    @Column()
    cursos: string
}