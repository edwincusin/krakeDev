//funcion para validar placa, el cual es ingresado en la caja de texto y llamamos a la funcion estructura para validar
validarPlaca=function(){
    let placa=recuperarTexto("txtPlaca");
    let provincia;
    let erroresEstructura=validarEstructura(placa);
    if(erroresEstructura == ""){
        mostrarTexto("lblValidacion","ESTRUCTURA VÁLIDA");
        mostrarTexto("lblErrores",erroresEstructura);
        provincia=obtenerProvincia(placa);
        if(provincia != ""){
            mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA: "+provincia);
        }else{
            mostrarTexto("lblProvincia","PROVINCIA INCORRECTA")
        }
    }else{
        mostrarTexto("lblValidacion","ESTRUCTURA INCORRECTA");
        console.log(erroresEstructura);
        mostrarTexto("lblErrores",erroresEstructura);
        mostrarTexto("lblProvincia","")
    }
};