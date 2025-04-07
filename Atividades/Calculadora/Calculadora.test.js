const Calculadora = require("./CalculadoraService");

describe("Teste de Serviço de Calculadora", () => {
  const calculadora = new Calculadora();

  test("A soma de 3 + 4 = 7", () => {
    expect(calculadora.somar(3, 4)).toBe(7);
  });
  test("A subtração de 2 - 2 = 0", () => {
    expect(calculadora.subtrair(2, 2)).toBe(0);
  });
  test("A multiplicação de 5 X 5 = 25 ", () => {
    expect(calculadora.multiplicar(5, 5)).toBe(25);
  });
  test("A divisão de 10 / 2 = 5 ", () => {
    expect(calculadora.dividir(10, 2)).toBe(5);
  });
  test("A divisão por zero deve lançar erro", () => {
    expect(() => calculadora.dividir(10, 0)).toThrow(
      "Divisão por zero não é permitida"
    );
  });
});
