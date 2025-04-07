const User = require("./UsuarioService");

describe("", () => {
  const dadosValidos = {
    document: "12345678901", // CPF válido (sintaticamente)
    name: "João Silva",
    email: "joao@example.com",
    password: "minhasenha123",
    confirmPassword: "minhasenha123",
    cep: "12345-678",
  };

  test("Cenário 1 - Cadastro de usuário com informações válidas", () => {
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
    console.log("Usuário cadastrado com sucesso!");
  });

  test("Cenário 2 - confirmação de senha diferente da senha", () => {
    let sucesso = false;

    try {
      const user = new User(
        dadosValidos.document,
        dadosValidos.name,
        dadosValidos.email,
        dadosValidos.password,
        (dadosValidos.confirmPassword = "1234567890"),
        dadosValidos.cep
      );
      sucesso = true;
    } catch (e) {
      sucesso = false;
      console.log("As senhas não coincidem.");
    }

    expect(sucesso).toBe(false);
  });

  test("Cenário 3 - Testando campo vazio nome", () => {
    let sucesso = false;

    try {
      const user = new User(
        dadosValidos.document,
        (dadosValidos.name = ""),
        dadosValidos.email,
        dadosValidos.password,
        dadosValidos.confirmPassword,
        dadosValidos.cep
      );
      sucesso = true;
    } catch (e) {
      sucesso = false;
      console.log("Todos os campos são obrigatórios. (Nome)");
    }

    expect(sucesso).toBe(false);
  });
  test("Cenário 4 - Testando campo vazio email", () => {
    let sucesso = false;

    try {
      const user = new User(
        dadosValidos.document,
        dadosValidos.name,
        (dadosValidos.email = ""),
        dadosValidos.password,
        dadosValidos.confirmPassword,
        dadosValidos.cep
      );
      sucesso = true;
    } catch (e) {
      sucesso = false;
      console.log("Todos os campos são obrigatórios. (Email)");
    }

    expect(sucesso).toBe(false);
  });
  test("Cenário 5 - Testando campo vazio senha", () => {
    let sucesso = false;

    try {
      const user = new User(
        dadosValidos.document,
        dadosValidos.name,
        dadosValidos.email,
        (dadosValidos.password = ""),
        dadosValidos.confirmPassword,
        dadosValidos.cep
      );
      sucesso = true;
    } catch (e) {
      sucesso = false;
      console.log("Todos os campos são obrigatórios. (Senha)");
    }

    expect(sucesso).toBe(false);
  });
  test("Cenário 6 - Testando campo vazio CPF", () => {
    let sucesso = false;

    try {
      const user = new User(
        (dadosValidos.document = ""),
        dadosValidos.name,
        dadosValidos.email,
        dadosValidos.password,
        dadosValidos.confirmPassword,
        dadosValidos.cep
      );
      sucesso = true;
    } catch (e) {
      sucesso = false;
      console.log("Todos os campos são obrigatórios. (CPF)");
    }

    expect(sucesso).toBe(false);
  });
  test("Cenário 7 - Testando campo vazio Cep", () => {
    let sucesso = false;

    try {
      const user = new User(
        dadosValidos.document,
        dadosValidos.name,
        dadosValidos.email,
        dadosValidos.password,
        dadosValidos.confirmPassword,
        (dadosValidos.cep = "")
      );
      sucesso = true;
    } catch (e) {
      sucesso = false;
      console.log("Todos os campos são obrigatórios. (CEP)");
    }

    expect(sucesso).toBe(false);
  });

  test("Cenário 8 - Testando campo email inválido", () => {
    let sucesso = false;

    try {
      const user = new User(
        dadosValidos.document,
        dadosValidos.name,
        (dadosValidos.email = "@gmail.com"),
        dadosValidos.password,
        dadosValidos.confirmPassword,
        dadosValidos.cep
      );
      sucesso = true;
    } catch (e) {
      sucesso = false;
      console.log("E-mail inválido.");
    }

    expect(sucesso).toBe(false);
  });
  test("Cenário 9 - Senha com 7 caracteres", () => {
    let sucesso = false;

    try {
      const user = new User(
        dadosValidos.document,
        dadosValidos.name,
        dadosValidos.email,
        (dadosValidos.password = "minhase"),
        dadosValidos.confirmPassword,
        dadosValidos.cep
      );
      sucesso = true;
    } catch (e) {
      sucesso = false;
      console.log("A senha deve ter pelo menos 8 caracteres.");
    }

    expect(sucesso).toBe(false);
  });
  test("Cenário 10 - CPF inválido", () => {
    let sucesso = false;

    try {
      const user = new User(
        (dadosValidos.document = "123456456"),
        dadosValidos.name,
        dadosValidos.email,
        dadosValidos.password,
        dadosValidos.confirmPassword,
        dadosValidos.cep
      );
      sucesso = true;
    } catch (e) {
      sucesso = false;
      console.log("Documento deve ser um CPF ou CNPJ válido.");
    }

    expect(sucesso).toBe(false);
  });
  test("Cenário 10 - CNPJ inválido", () => {
    let sucesso = false;

    try {
      const user = new User(
        (dadosValidos.document = "1234564542424246"),
        dadosValidos.name,
        dadosValidos.email,
        dadosValidos.password,
        dadosValidos.confirmPassword,
        dadosValidos.cep
      );
      sucesso = true;
    } catch (e) {
      sucesso = false;
      console.log("Documento deve ser um CPF ou CNPJ válido.");
    }

    expect(sucesso).toBe(false);
  });
  test("Cenário 12 - CEP inválido", () => {
    let sucesso = false;

    try {
      const user = new User(
        dadosValidos.document,
        dadosValidos.name,
        dadosValidos.email,
        dadosValidos.password,
        dadosValidos.confirmPassword,
        (dadosValidos.cep = "131245")
      );
      sucesso = true;
    } catch (e) {
      sucesso = false;
      console.log("CEP inválido.");
    }

    expect(sucesso).toBe(false);
  });
});
