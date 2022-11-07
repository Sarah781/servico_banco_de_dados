export class Validator {

    validateNome(nome: string) {
        if (nome.length < 3)
            return new Error("Nome deve ter pelo menos 3 caracteres");
        return null;
    }

}
