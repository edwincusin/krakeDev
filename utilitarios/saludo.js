//funcion saludar, 
saludar=function(){
    //recuperar valor caja texto de txtNombre
    let nombre=recuperarTexto("txtNombre");
    //recuperar valor caja texto de txtApellido
    let apellido=recuperarTexto("txtApellido");
    //recuperar int
    let edad=recuperarInt("txtEdad");
    //recuperar float
    let estatura=recuperarFloat("txtEstatura")
    //mostrar texto
    let mensajeBienvenido="Bienvenido "+nombre+" "+apellido;
    mostrarTexto("lblResultado",mensajeBienvenido);
    //mostrar img
    mostrarImagen("imgSaludo","./imagenes/saludoNaruto.gif");

};

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

