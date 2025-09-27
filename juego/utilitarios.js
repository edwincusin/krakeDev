//funcion para mostrar img
mostrarImagen=function(idComponente,rutaImagen){
    let componente=document.getElementById(idComponente);
    componente.src=rutaImagen;
};

//funcion para mostrar texto
mostrarTexto=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
};

//funcion mostrar texto en  una caja
mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente);
    componente.value=mensaje;
};

//funcion para recuperar texto
recuperarTexto=function(idComponente){
    let componente=document.getElementById(idComponente);
    let valorIngresado=componente.value;
    return valorIngresado; 
};

//funcion para recuperar valor int
recuperarInt=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorEntero=parseInt(valorCaja);
    return valorEntero;
};

//funcion para recuperar valor float
recuperarFloat=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorFloat=parseFloat(valorCaja);
    return valorFloat;
};

