function generarFizzbazz(n){
    const FIZZ = 3;
    const BAZZ = 5;
    if(n % FIZZ === 0){
        return "Fizz";
    }else
    {
        if(n == BAZZ){
            return "Bazz";
        }
    }
    return n + "";
}

export default generarFizzbazz;