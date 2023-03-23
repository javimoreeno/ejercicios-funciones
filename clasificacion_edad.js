function clasificacion_edad(edad){
    if(edad<13){
       return"niño";
    }else if(13>=edad>=18){
        return"adolescente";
    }else if(edad>18){
        return"Eres mayor de edad";
}
}
console.log("Eres:" + clasificacion_edad("16"));