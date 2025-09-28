// funcion jugar
jugar=function(seleccionado){
    let datoGenerarElemento=generarElemento(); // dato aleatorio computadora
    let datoGenerarRuta=generarRuta(datoGenerarElemento); // con este dato luego para usar mostrar imagen
    //para mostrar en pantalla mensaje de ganador/empate /perdiste
    if(determinarGanador(datoGenerarElemento,seleccionado) == 0){
        console.log("resultado estado partida: EMPATE");
    }
    if(determinarGanador(datoGenerarElemento,seleccionado) == 1){
        console.log("resultado estado partida: PERDISTE LA PARTIDA!!");
    }
    if(determinarGanador(datoGenerarElemento,seleccionado) == 2){
        console.log("resultado estado partida: GANASTE LA PARTIDA!!");
    }

    
};