// funcion validar estructura basica de una placa
validarEstructura=function(placa){
    let tamanioCadena=placa.length;
    let errorUno="", errorDos="", errorTres="", errorCuatro="", errorCinco="", errorSeis="", errorSiete="", errorOcho="", errorNueve="";
    let primerCaracter, segundoCaracter, tercerCaracter, cuartoCaracter, quintoCaracter, sextoCaracter, septimoCaracter, octavoCaracter;
    
    //VALIDACION LONGITUD PLACA
    if((tamanioCadena < 7) || (tamanioCadena > 8) ){
        errorUno="EL DATO INGRESADO NO CUMPLE CON LA LONGITUD (7-8) DE UNA PLACA, "
    }

    //VALIDACION PRIMER CARACTER - LETRA MAYUSCULA
    primerCaracter=placa.charAt(0);
    if(!esMayuscula(primerCaracter)){
        errorDos="EL PRIMER CARACTER DEBE SER UNA LETRA MAYUSCULA, "
    }
    //VALIDACION SEGUNDO CARACTER - LETRA MAYUSCULA
    segundoCaracter=placa.charAt(1);
    if(!esMayuscula(segundoCaracter)){
        errorTres="EL SEGUNDO CARACTER DEBE SER UNA LETRA MAYUSCULA, "
    }
    // VALIDACION TERCER CARACTER - LETRA MAYUSCULA
    tercerCaracter=placa.charAt(2);
    if(!esMayuscula(tercerCaracter)){
        errorCuatro="EL TERCER CARACTER DEBE SER UNA LETRA MAYUSCULA, "
    }
    // VALIDACION GUION
    cuartoCaracter=placa.charAt(3);
    if(!esGuion(cuartoCaracter)){
        errorCinco="EL CUARTO CARACTER NO ES UN GUION O ESTA MAL DIGITADA LA PLACA, "
    } 
    // VALIDACION QUINTO CARACTER - DIGITO
    quintoCaracter=placa.charAt(4);
    if(!esDigito(quintoCaracter)){
        errorSeis="EL QUINTO CARACTER DEBE SER UN DIGITO, "
    }
    // VALIDACION SEXTO CARACTER - DIGITO
    sextoCaracter=placa.charAt(5);
    if(!esDigito(sextoCaracter)){
        errorSiete="EL SEXTO CARACTER DEBE SER UN DIGITO, "
    }
    // VALIDACION SEPTIMO CARACTER - DIGITO
    septimoCaracter=placa.charAt(6);
    if(!esDigito(septimoCaracter)){
        errorOcho="EL SEPTIMO CARACTER DEBE SER UN DIGITO, "
    }
    // VALIDACION OCTAVO CARACTER - DIGITO
    if(tamanioCadena == 8){
        octavoCaracter=placa.charAt(7);
        if(!esDigito(octavoCaracter)){
            errorNueve="EL OCTAVO CARACTER DEBE SER UN DIGITO."
        }
    }
    let concatenarErrores= errorUno + errorDos + errorTres + errorCuatro + errorCinco + errorSeis + errorSiete + errorOcho + errorNueve;
    return concatenarErrores;
};