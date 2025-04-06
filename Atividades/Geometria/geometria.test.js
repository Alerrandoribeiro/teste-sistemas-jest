const GeometriaService = require("./GeometriaService")

describe("Teste serviços Geometria", () => {
    const geometria = new GeometriaService();
  
    test("Ao calcular a área do triângulo de base 2.0 e altura 2.0 deve ser obtido o valor 2.0 de área.", () => {
      expect(geometria.areaTriangulo(2.0, 2.0)).toBe(2.0);
    });
  
    test("Ao calcular a área de um círculo de raio 2.0 deve ser retornado o valor 12.6 de área com precisão de 0.1. first", () => {
      expect(geometria.areaCircunferencia(2.0)).toBeCloseTo(12.6, 0.1);
    });
  
    test("Ao calcular a área de um quadrado de lado 2.0 deve ser retornado o valor 4.0 de área.", () => {
      expect(geometria.areaQuadrado(2.0)).toBe(4.0);
    });
  
    test("Ao calcular a área de um retângulo de lados 2.0 e 3.0 deve ser retornado o valor de 6.0 de área. first", () => {
      expect(geometria.areaRetangulo(2.0, 3.0)).toBe(6.0);
    });
    test("Ao calcular o volume de um cubo de lado 2.0 deve ser retornado o valor 8.0.", () => {
      expect(geometria.volumeCubo(2.0)).toBe(8.0);
    });
    test("Ao calcular o volume de um cilindro de raio 2.0 e altura 2.0 deve ser retornado o valor de 25.1 com precisão de 0.1.", () => {
      expect(geometria.volumeCilindro(2.0, 2.0)).toBeCloseTo(25.1, 0.1);
    });             
    test("Ao calcular o volume de uma esfera de raio 2.0 deve ser retornado o valor de 33.5 com precisão de 0.1.", () => {
      expect(geometria.volumeEsfera(2.0)).toBeCloseTo(33.5, 0.1);
    });             
  });
  