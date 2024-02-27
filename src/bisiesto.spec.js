import EsBisiesto from "./bisiesto";

describe("Bisiesto", () => {
    it("deberia generar ES BISIESTO si el anio es 400", () => {
        expect(EsBisiesto(400)).toEqual("ES BISIESTO");
    });
})