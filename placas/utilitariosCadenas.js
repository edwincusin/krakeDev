// funcion para verificar si un caracter es mayuscula
esMayuscula=function(caracter){
    let letra=caracter.charCodeAt(0);
    if(letra >= 65 && letra <= 90){
        return true;
    }else{
        return false;
    }        
};
//funcion es digito, verifica si es un numero comprendido de 1 a 9
esDigito=function(caracter){
    let digito=caracter.charCodeAt(0);
    if(digito >= 48 && digito <= 57){
        return true;
    }else{
        return false;
    }   
};
//funcion es guiion, verifica si el caracter es un guion
esGuion=function(caracter){
    let dato=caracter.charCodeAt(0);
    if(dato == 45){
        return true;
    }else{
        return false;
    } 
};

