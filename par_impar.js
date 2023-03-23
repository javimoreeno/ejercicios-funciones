function par_impar(x){
    if(x%2==0){
        return "par";
    }else{
        return "Impar";
    }
}

console.log("El número es:" + par_impar(4));