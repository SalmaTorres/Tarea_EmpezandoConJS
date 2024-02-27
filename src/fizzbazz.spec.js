import generarFizzbazz from "./fizzbazz.js";

describe("Fizzbazz", () => {
    it("deberia generar el mismo numero para uno que no tiene reglas como el nro 1", () => {
        expect(generarFizzbazz(1)).toEqual("1");
    });
})