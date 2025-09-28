// funcion obtener aleatorio de 1 al 3.
obtenerAleatorio=function(){
    let aleatorio=Math.random(3);
    let numeroMultiplicado=aleatorio*3;
    let numeroEntero=parseInt(numeroMultiplicado);
    let resultadoAleatorio=numeroEntero+1;
    console.log(resultadoAleatorio); // para porbar en la consola
    return resultadoAleatorio;
};

//funcion generar elemento genera automaticamente las cadenas piedra, pael , tijera
generarElemento=function(){
    let numeroAleatorio=obtenerAleatorio();
    let cadena;
    if(numeroAleatorio == 1){
        cadena= "PIEDRA";
    }
    if(numeroAleatorio == 2){
        cadena="PAPEL";
    }
    if(numeroAleatorio == 3){
        cadena="TIJERA";
    }
    console.log("generar elemento: "+cadena); // para porbar en la consola
    return cadena;    
};

//funciona determinar jugador
determinarGanador=function(eleccionJugador1,eleccionJugador2){
    let resultadoGanador;
    eleccionJugador1="";
    eleccionJugador2=""
    //combinacion1
    if((eleccionJugador1 == "PIEDRA") && (eleccionJugador2 == "PIEDRA")){
        resultadoGanador=0;
    }
    if((eleccionJugador1 == "PIEDRA") && (eleccionJugador2 == "PAPEL")){
        resultadoGanador=2;
    }
    if((eleccionJugador1 == "PIEDRA") && (eleccionJugador2 == "TIJERA")){
        resultadoGanador=1;
    }
    //combinacion2
    if((eleccionJugador1 == "PAPEL") && (eleccionJugador2 == "PIEDRA")){
        resultadoGanador=1;
    }
    if((eleccionJugador1 == "PAPEL") && (eleccionJugador2 == "PAPEL")){
        resultadoGanador=0;
    }
    if((eleccionJugador1 == "PAPEL") && (eleccionJugador2 == "TIJERA")){
        resultadoGanador=2;
    }
    //combinacion3
    if((eleccionJugador1 == "TIJERA") && (eleccionJugador2 == "PIEDRA")){
        resultadoGanador=2;
    }
    if((eleccionJugador1 == "TIJERA") && (eleccionJugador2 == "PAPEL")){
        resultadoGanador=1;
    }
    if((eleccionJugador1 == "TIJERA") && (eleccionJugador2 == "TIJERA")){
        resultadoGanador=0;
    }
    console.log("determinar ganador: " + resultadoGanador); // para porbar en la consola
    return resultadoGanador;
};

//generar ruta de la imagen en base al nombre que recibe piedra pael tiejera.
generarRuta=function(nombre){
    let ruta="";
    if(nombre == "PIEDRA"){
        ruta="./img/piedra.png";
    }
    if(nombre == "PAPEL"){
        ruta="./img/papel.png";
    }
    if(nombre == "TIJERA"){
        ruta="./img/tijera.png";
    }    
    console.log("ruta: " + ruta); // para porbar en la consola
    return ruta;
};

