import EsBisiesto from "./bisiesto";

describe("Bisiesto", () => {
    it("deberia generar ES BISIESTO si el anio es 400", () => {
        expect(EsBisiesto(400)).toEqual("ES BISIESTO");
    });
    it("deberia generar ES BISIESTO si el anio es divisible por 400", () => {
        expect(EsBisiesto(2000)).toEqual("ES BISIESTO");
    });
})