import generarFizzbazz from "./fizzbazz.js";

describe("Fizzbazz", () => {
    it("deberia generar el mismo numero para uno que no tiene reglas como el nro 1", () => {
        expect(generarFizzbazz(1)).toEqual("1");
    });
    it("deberia generar el mismo numero para uno que no tiene reglas como el nro 2", () => {
        expect(generarFizzbazz(2)).toEqual("2");
    });
    it("deberia generar fizz si es el nro 3", () => {
        expect(generarFizzbazz(3)).toEqual("Fizz");
    });
    it("deberia generar fizz si el nro es multiplo de 3", () => {
        expect(generarFizzbazz(6)).toEqual("Fizz");
    });
    it("deberia generar Bazz si es el nro 5", () => {
        expect(generarFizzbazz(5)).toEqual("Bazz");
    });
    it("deberia generar Bazz para un numero multiplo de 5", () => {
        expect(generarFizzbazz(10)).toEqual("Bazz");
    });
})