import { MariaDBDataSource } from "./data_source";
import { Projeto, Pessoa } from "./model";

export class ProjetoService {
    async getAll() {
       return await MariaDBDataSource.manager.find(Projeto);
    }
}

export class PessoaService {
    async getOne() {
       return await MariaDBDataSource.manager.find(Pessoa, {take: 1});
    }
}
