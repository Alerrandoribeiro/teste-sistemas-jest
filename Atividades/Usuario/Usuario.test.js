const User = require("./UsuarioService");

describe("Cenário 1 - Cadastro de usuário com informações válidas", () => {
  test("Deve cadastrar o usuário com sucesso", () => {
    const dadosValidos = {
      document: "12345678901", // CPF válido (sintaticamente)
      name: "João Silva",
      email: "joao@example.com",
      password: "minhasenha123",
      confirmPassword: "minhasenha123",
      cep: "12345-678"
    };

    // Ao criar o usuário com dados válidos, não deve lançar erro
    let sucesso = false;

    try {
      const user = new User(
        dadosValidos.document,
        dadosValidos.name,
        dadosValidos.email,
        dadosValidos.password,
        dadosValidos.confirmPassword,
        dadosValidos.cep
      );
      sucesso = true;
    } catch (e) {
      sucesso = false;
    }

    expect(sucesso).toBe(true);
  });
});
