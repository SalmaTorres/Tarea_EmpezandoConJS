import generarFizzbazz from "./fizzbazz.js";
import generarSecuenciaFizzbazz from "./fizzbazz_secuencia.js";

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
    it("deberia generar FizzBazz para un numero que siga esa regla con los multiplos de 3 y 5 a la vez", () => {
        expect(generarFizzbazz(15)).toEqual("FizzBazz");
    });
    it("deberia generar una secuencia con limite 1", () => {
        expect(generarSecuenciaFizzbazz(1)).toEqual("1 ");
    });
    it("deberia generar una secuencia con limite 2", () => {
        expect(generarSecuenciaFizzbazz(2)).toEqual("1 2 ");
    });
    it("deberia generar una secuencia con limite 4", () => {
        expect(generarSecuenciaFizzbazz(4)).toEqual("1 2 Fizz 4 ");
    });
    it("deberia generar una secuencia con limite 15", () => {
        expect(generarSecuenciaFizzbazz(15)).toEqual("1 2 Fizz 4 Bazz Fizz 7 8 Fizz Bazz 11 Fizz 13 14 FizzBazz ");
    });
})