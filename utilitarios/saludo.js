//funcion saludar, 
saludar=function(){
    //recuperar valor caja texto de txtNombre
    let nombre=recuperarTexto("txtNombre");
    //recuperar valor caja texto de txtApellido
    let apellido=recuperarTexto("txtApellido");
};

//funcion para recuperar texto
recuperarTexto=function(idComponente){
    let componente=document.getElementById(idComponente);
    let valorIngresado=componente.value;
    return valorIngresado; 
};