const User = require("./UsuarioService");

describe("Testes de Cadastro de Usuario", () => {

  test("Cenário 1: Testando cadastro de usuario", () => {
    const novoUsuario = new User(
      "123.456.789-00",
      "João da Silva",
      "joao.silva@email.com",
      "SenhaForte123",
      "SenhaForte123",
      "01001-000"
    );
    expect(novoUsuario).toBeDefined();
    console.log("Usuário Cadastrado");
  });

  test("Cenário 2: Testando se a senha e confirmação não são iguais", () => {
    expect(() => new User(
      "987.654.321-99",
      "Maria Oliveira",
      "maria.oliveira@email.com",
      "MinhaSenha456",
      "MinhaSenha457",
      "20040-020"
    )).toThrow("As senhas não coincidem.");
  });

  test("Cenário 3 - Testando campo vazio nome", () => {
    expect(() => new User(
      "987.654.321-99",
      "",
      "maria.oliveira@email.com",
      "MinhaSenha456",
      "MinhaSenha457",
      "20040-020"
    )).toThrow("Todos os campos são obrigatórios.");
  });

  test("Cenário 4 - Testando campo vazio E-mail", () => {
    expect(() => new User(
      "983.651.322-91",
      "Raul Oliveira",
      "",
      "MinhaSenha456",
      "MinhaSenha457",
      "20040-020"
    )).toThrow("Todos os campos são obrigatórios.");
  });

  test("Cenário 5 - Testando campo vazio senha", () => {
    expect(() => new User(
      "988.652.322-94",
      "Pedro Silva",
      "pedrosilva@gmail.com",
      "",
      "MinhaSenha457",
      "20040-020"
    )).toThrow("Todos os campos são obrigatórios.");
  });

  test("Cenário 6 - Testando campo vazio confirmar senha", () => {
    expect(() => new User(
      "988.652.322-94",
      "Pedro Silva",
      "pedrosilva@gmail.com",
      "MinhaSenha457",
      "",
      "20040-020"
    )).toThrow("Todos os campos são obrigatórios.");
  });

  test("Cenário 7 - Testando campo vazio CPF", () => {
    expect(() => new User(
      "",
      "Allan Silva",
      "allansilva@gmail.com",
      "MinhaSenha457",
      "MinhaSenha457",
      "20040-020"
    )).toThrow("Todos os campos são obrigatórios.");
  });

  test("Cenário 8 - Testando campo vazio Cep", () => {
    expect(() => new User(
      "988.652.322-93",
      "Allan Silva",
      "allansilva@gmail.com",
      "MinhaSenha457",
      "MinhaSenha457",
      ""
    )).toThrow("Todos os campos são obrigatórios.");
  });

  test("Cenário 9 - Testando campo E-mail inválido!", () => {
    expect(() => new User(
      "988.652.322-93",
      "Allan Silva",
      "@gmail.com",
      "MinhaSenha457",
      "MinhaSenha457",
      "88060-223"
    )).toThrow("E-mail inválido.");
  });

  test("Cenário 10 - Testando campo senha com 7 caracteres!", () => {
    expect(() => new User(
      "988.652.322-93",
      "Allan Silva",
      "allan@gmail.com",
      "1234567",
      "1234567",
      "88060-223"
    )).toThrow("A senha deve ter pelo menos 8 caracteres.");
  });

  test("Cenário 11 - Testando o cadastro do usuário com um CPF inválido", () => {
    expect(() => new User(
      "111.111.111-11",
      "Allan Silva",
      "allan@gmail.com",
      "1234567",
      "1234567",
      "88060-223"
    )).toThrow("Documento deve ser um CPF ou CNPJ válido.");
  });

  test("Cenário 12 - Testando o cadastro do usuário com um CNPJ inválido", () => {
    expect(() => new User(
      "11.111.111/1111-11",
      "Allan Silva",
      "allan@gmail.com",
      "1234567",
      "1234567",
      "88060-223"
    )).toThrow("Documento deve ser um CPF ou CNPJ válido.");
  });

  test("Cenário 13 - Testando o cadastro do usuário com um CEP inválido", () => {
    expect(() => new User(
      "45.723.174/0001-10",
      "Allan Silva",
      "allan@gmail.com",
      "1234567",
      "1234567",
      "0000-000"
    )).toThrow("CEP inválido.");
  });

  test("Cenário 14 - Testando o cadastro com CNPJ válido", () => {
    const novoUsuarioCnpj = new User(
        "12.345.678/0001-90",
        "João da Silva",
        "joao.silva@email.com",
        "SenhaForte123",
        "SenhaForte123",
        "01001-000"
      );
      expect(novoUsuarioCnpj).toBeDefined();
      console.log("Usuário Cadastrado com CNPJ");
  });
});
