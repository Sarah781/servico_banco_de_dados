import { Validator } from "../src/models/validator";

it("validateNome with a invalid nome", () => {
    const validator = new Validator();
    const error = validator.validateNome("Josafaf");
    expect(error).not.toBeNull();
    expect(error.message).toBe("Nome deve ter pelo menos 3 caracteres");
});

it("validateNome with a valid nome", () => {
    const validator = new Validator();
    const error = validator.validateNome("João");
    expect(error).toBeNull();
});
