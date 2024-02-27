function generarFizzbazz(n){
    const FIZZ = 3;
    const BAZZ = 5;
    if(n % FIZZ === 0){
        if(n % BAZZ === 0){
            return "FizzBazz";
        }
        return "Fizz";
    }else
    {
        if(n % BAZZ === 0){
            return "Bazz";
        }
    }

    return n + "";
}

export default generarFizzbazz;