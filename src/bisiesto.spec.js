import EsBisiesto from "./bisiesto";

describe("Bisiesto", () => {
    it("deberia generar ES BISIESTO si el anio es 400", () => {
        expect(EsBisiesto(400)).toEqual("ES BISIESTO");
    });
    it("deberia generar ES BISIESTO si el anio es divisible por 400", () => {
        expect(EsBisiesto(2000)).toEqual("ES BISIESTO");
    });
    it("deberia generar NO ES BISIESTO si el anio es divisible por 100 y no por 400", () => {
        expect(EsBisiesto(1700)).toEqual("NO ES BISIESTO");
    });
    it("deberia generar NO ES BISIESTO si el anio es divisible por 100 y no por 400", () => {
        expect(EsBisiesto(1900)).toEqual("NO ES BISIESTO");
    });
})