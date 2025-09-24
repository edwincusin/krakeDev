let puntos=0;
let lanzamientos=5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostraCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();    
};

modificarPuntos=function(numero){
    puntos=puntos+numero;  
    cambiarTexto("lblPuntos",puntos);    
    // si el jugador obtiene mas de 20 puntos , mostrar mensaje ganaste
    //colocar puntaje en 0 y lanzamientos en 5
    if(puntos > 20){
        cambiarTexto("lblMensaje","¡GANASTE! "+puntos );
        limpiar();
    } 
};

//NORECIBE PARAMETROS
//RESTA 1 A LA VARIABLE LANZAMIENTOS 
//MUESTRA PANTALLA
modificarLanzamientos=function(){
    lanzamientos=lanzamientos-1;
    cambiarTexto("lblLanzamientos",lanzamientos);
    //si lanzamientos llega a 0, mostrar mensaje GAME OVER
    //invocar limpiar
    if(lanzamientos < 0){
        cambiarTexto("lblMensaje","GAME OVER! "+puntos);
        limpiar();
    }
};

limpiar=function(){
    //colocar puntaje en 0 y lanzamientos en 5
    //en pantalla
    //quitar imagen
    puntos=0;
    lanzamientos=5;
    cambiarTexto("lblPuntos",puntos);
    cambiarTexto("lblLanzamientos",lanzamientos);
    cambiarImagen("imgDado","");
};

//FUNCION MOSTRAR CARA, RECIBE EL NUMERO QUE QUIERE MOSTRAR.
//MUESTRA LA IMAGEN AL NUMERO QUE RECIBE 
//NO RETORNA NADA
mostraCara=function(numero){
    if(numero ==1 ){ // con dobe == compara y con un = solo asigna
        cambiarImagen("imgDado","dados1.png");
    }else if(numero == 2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero == 3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero == 4){
        cambiarImagen("imgDado","dados4.png");
    }else if(numero == 5){
        cambiarImagen("imgDado","dados5.png");
    }else {
        cambiarImagen("imgDado","dados6.png");
    }
};

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}