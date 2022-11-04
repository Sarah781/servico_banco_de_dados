import internal = require("stream")
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

    constructor(id: number, nome: string, linguagem: string, anoInicio: number, anoFim: number) {
        this.id = id
        this.nome = nome
        this.linguagem = linguagem
        this.anoInicio = anoInicio
        this.anoFim = anoFim
    }

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
