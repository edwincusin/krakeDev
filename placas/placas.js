//funcion para validar placa, el cual es ingresado en la caja de texto y llamamos a la funcion estructura para validar
validarPlaca=function(){
    let placa=recuperarTexto("txtPlaca");
    let erroresEstructura=validarEstructura(placa);
    if(erroresEstructura == ""){
        console.log("ESTRUCTURA VALIDA");
        mostrarTexto("lblValidacion","ESTRUCTURA VÁLIDA");
        mostrarTexto("lblErrores",erroresEstructura);

    }else{
        console.log("ESTRUCTURA INCORRECTA");
        mostrarTexto("lblValidacion","ESTRUCTURA INCORRECTA");
        console.log(erroresEstructura);
        mostrarTexto("lblErrores",erroresEstructura);
    }
};