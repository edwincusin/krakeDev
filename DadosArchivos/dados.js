jugar=function(){
    let valorRecuperado=lanzarDado();
    cambiarTexto("lblNumero",valorRecuperado);
    if(valorRecuperado >3 ){
        let mensajeGanador= "ES MAYOR A 3, GANASTE!!";
        cambiarTexto("lblMensaje",mensajeGanador);
    }else{
        let mensajePerdedor= "ES MENOR A 3, NO ESTAS DE SUERTE!!";
        cambiarTexto("lblMensaje",mensajePerdedor);
    }
};

//crear una funcion lanzar dado
///no recibe paramaetros
//retorno num aleatorio entre 1 - 6.
lanzarDado=function(){
    let aleatorio=Math.random();
    let numeroMultiplicado=aleatorio*6;
    let numeroEntero=parseInt(numeroMultiplicado);
    let valorDado=numeroEntero+1;
    return valorDado;
};