import { MariaDBDataSource } from "./data_source";
import { Projeto, Pessoa } from "./model";

export class ProjetoService {
    async getAll() {
       return await MariaDBDataSource.manager.find(Projeto);
    }

    async save(projeto: Projeto) {
        const projetoSalvo = await MariaDBDataSource.manager.save(projeto);
        return {sucess: true, projetoSalvo};
    }

    async delete(id: number) {
        return await MariaDBDataSource.manager.delete(Projeto, {id});
    }
}

export class PessoaService {
    async getOne() {
       return await MariaDBDataSource.manager.find(Pessoa, {take: 1});
    }
}
