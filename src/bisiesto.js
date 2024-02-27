function EsBisiesto(anio){
    if(anio % 400 == 0){
        return "ES BISIESTO";
    }else{
        if(anio % 100 == 0){
            return "NO ES BISIESTO";
        }else{
            if(anio % 4 == 0){
                return "ES BISIESTO"
            }else
                return "NO ES BISIESTO";
        }
    }
}

export default EsBisiesto;