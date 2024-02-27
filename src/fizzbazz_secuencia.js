import generarFizzbazz from "./fizzbazz";

function generarSecuenciaFizzBazz(limite){
    var secuencia = "";
    for(var i=1; i<=limite; i++){
        secuencia = secuencia + generarFizzbazz(i) + " ";
    }
    return secuencia;
}

export default generarSecuenciaFizzBazz;
