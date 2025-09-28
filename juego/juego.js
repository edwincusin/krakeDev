//variables globales
let puntosUsuario=0;
let puntosComputador=0;

// funcion jugar
jugar=function(seleccionado){
    let datoGenerarElemento=generarElemento(); // dato aleatorio computadora
    let datoGenerarRuta=generarRuta(datoGenerarElemento); // con este dato luego para usar mostrar imagen
    mostrarImagen("imgComputador",datoGenerarRuta);
    //para mostrar en pantalla mensaje de ganador/empate /perdiste
    if(determinarGanador(datoGenerarElemento,seleccionado) == 0){
        console.log("resultado estado partida: EMPATE");
        mostrarTexto("lblGanadorPartida", "ES UN: EMPATE");
    }
    if(determinarGanador(datoGenerarElemento,seleccionado) == 1){
        console.log("resultado estado partida: PERDISTE LA PARTIDA!!");
        mostrarTexto("lblGanadorPartida", "PERDISTE PARTIDA!!");
        puntosUsuario=puntosUsuario;
        puntosComputador=puntosComputador+1;
    }
    if(determinarGanador(datoGenerarElemento,seleccionado) == 2){
        console.log("resultado estado partida: GANASTE LA PARTIDA!!");
        mostrarTexto("lblGanadorPartida", "GANASTE PARTIDA!!");
        puntosUsuario=puntosUsuario+1;
        puntosComputador=puntosComputador;
    }
    mostrarTexto("lblPuntajeJugador", "PUNTOS JUGADOR: "+puntosUsuario);
    mostrarTexto("lblPuntajeComputadora", "PUNTOS COMPUTADOR: "+puntosComputador);

    if(puntosUsuario == 5){
        mostrarTexto("lblGanadorJuego", "HAS GANADO EL JUEGO");
    }
    if(puntosComputador == 5){
        mostrarTexto("lblGanadorJuego", "EL COMPUTADOR TE HA VENCIDO");
    }
};

limpiar=function(){
    puntosUsuario=0;
    puntosComputador=0;
    mostrarTexto("lblGanadorPartida", "");
    mostrarTexto("lblPuntajeJugador", "");
    mostrarTexto("lblPuntajeComputadora", "");
    mostrarTexto("lblGanadorJuego", "");
    mostrarImagen("imgComputador","");
};