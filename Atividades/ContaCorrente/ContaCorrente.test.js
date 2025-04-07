const ContaCorrente = require("./ContaCorrente");

describe("Teste Conta Corrente", () => {
    let maria, jose;

    beforeEach(() => {
        maria = new ContaCorrente("Maria", 200);
        jose = new ContaCorrente("José", 100);
    });

    test("Criação de contas - devem estar definidas", () => {
        expect(maria).toBeDefined();
        expect(jose).toBeDefined();
    });

    test("Saldo das contas - devem ser diferentes", () => {
        expect(maria.balanco).not.toBe(jose.balanco);
    });

    test("Saque - após sacar R$100 da conta de Maria, saldo igual ao de José", () => {
        maria.sacar(100);
        expect(maria.balanco).toBe(jose.balanco);
    });

    test("Depósito - após depositar R$50 em José, ele deve ter saldo 150", () => {
        jose.depositar(50);
        expect(jose.balanco).toBe(150);
    });

    test("Depósito inválido (valor negativo) - saldo não deve mudar", () => {
        jose.depositar(-50);
        expect(jose.balanco).toBe(100);
    });

    test("Saque inválido - valor maior que o saldo deve retornar false", () => {
        expect(maria.sacar(500)).toBe(false);
        expect(jose.sacar(200)).toBe(false);
    });

    test("Saque válido - valor dentro do saldo deve retornar true", () => {
        expect(maria.sacar(50)).toBe(true);
        expect(jose.sacar(80)).toBe(true);
    });

    test("Set nome - deve atualizar o nome corretamente", () => {
        maria.nome = "Maria Silva";
        expect(maria.nome).toBe("Maria Silva");
    });

    test("Set saldo válido - deve atualizar corretamente", () => {
        maria.balanco = 300;
        expect(maria.balanco).toBe(300);
    });

    test("Set saldo inválido - saldo negativo não deve atualizar", () => {
        maria.balanco = -50;
        expect(maria.balanco).toBe(200);
    });
});
