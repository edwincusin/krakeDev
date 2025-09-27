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

// funcion obtener provincia / determinar la provincia segun el primera letra de la placa
obtenerProvincia=function(placa){
    let primeraLetra=placa.charAt(0);
    let provincia=null;
    if(primeraLetra == "A"){
        provincia="AZUAY";
    }
    if(primeraLetra == "B"){
        provincia="BOLIVAR";
    }
    if(primeraLetra == "U"){
        provincia="CAÑAR";
    }
    if(primeraLetra == "C"){
        provincia="CARCHI";
    }
    if(primeraLetra == "X"){
        provincia="COTOPAXI";
    }
    if(primeraLetra == "H"){
        provincia="CHIMBORAZO";
    }
    if(primeraLetra == "O"){
        provincia="EL ORO";
    }
    if(primeraLetra == "E"){
        provincia="ESMERALDAS";
    }
    if(primeraLetra == "W"){
        provincia="GALÁPAGOS";
    }
    if(primeraLetra == "G"){
        provincia="GUAYAS";
    }
    if(primeraLetra == "I"){
        provincia="IMBABURA";
    }
    if(primeraLetra == "L"){
        provincia="LOJA";
    }
    if(primeraLetra == "R"){
        provincia="LOS RIOS";
    }
    if(primeraLetra == "M"){
        provincia="MANABÍ";
    }
    if(primeraLetra == "V"){
        provincia="MORONA SANTIAGO";
    }
    if(primeraLetra == "N"){
        provincia="NAPO";
    }
    if(primeraLetra == "S"){
        provincia="PASTAZA";
    }
    if(primeraLetra == "P"){
        provincia="PICHINCHA";
    }
    if(primeraLetra == "K"){
        provincia="SUCUMBÍOS";
    }
    if(primeraLetra == "Q"){
        provincia="ORELLANA";
    }
    if(primeraLetra == "T"){
        provincia="TUNGURAHUA";
    }
    if(primeraLetra == "Z"){
        provincia="ZAMORA CHINCHIPE";
    }
    if(primeraLetra == "Y"){
        provincia="SANTA ELENA";
    }
    return "PERTENECE A LA PROVINCIA: "+provincia;
};

//funcion para obtener el tipo de vehiculo, se detemina con el segundo caracter.
obtenerTipoVehiculo=function(placa){
    let segundaLetra=placa.charAt(1);
    let tipoVehiculo=null;
    if((segundaLetra == "A") || (segundaLetra == "Z")){
        tipoVehiculo="COMERCIAL (TAXI/AUTOBUSES)";
    }
    if(segundaLetra == "E"){
        tipoVehiculo="GUBERNAMNETALES";
    }
    if(segundaLetra == "X"){
        tipoVehiculo="DE USO OFICIAL";
    }   
    if(segundaLetra == "S"){
        tipoVehiculo="DEL GOBIERNO PROVINCIAL";
    }
    if(segundaLetra == "M"){
        tipoVehiculo = "MUNICIPAL";
    }
    if((segundaLetra !="A") && (segundaLetra !="E") && (segundaLetra !="X") && (segundaLetra !="S") && (segundaLetra !="M") && (segundaLetra !="Z")){
        tipoVehiculo ="PARTICULAR";    
    }
    return "EL TIPO DE VEHICULO ES: "+tipoVehiculo;
};

// funcion para obtener el que dias tiene pico y placa el vehiculo, de aceurdo al ultimo digito.
obtenerPicoYPlaca=function(placa){
    let ultimoDigito=placa.length-1;
    let digito=placa.charAt(ultimoDigito);
    let diaPicoYPlaca=null;

    if((digito == "1") || (digito == "2")){
        diaPicoYPlaca="LUNES";
    }
    if((digito == "3") || (digito == "4")){
        diaPicoYPlaca="MARTES";
    }
    if((digito == "5") || (digito == "6")){
        diaPicoYPlaca="MIERCOLES";
    }
    if((digito == "7") || (digito == "8")){
        diaPicoYPlaca="JUEVES";
    }
    if((digito == "9") || (digito == "0")){
        diaPicoYPlaca="VIERNES";
    }
    return "TIENE PICO Y PLACA LOS DIAS: "+ diaPicoYPlaca;
};