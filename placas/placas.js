//funcion para validar placa, el cual es ingresado en la caja de texto y llamamos a la funcion estructura para validar
validarPlaca=function(){
    let placa=recuperarTexto("txtPlaca");
    let provincia;
    let tipoVehiculo;
    let diaPicoYPlaca;
    let erroresEstructura=validarEstructura(placa);
    if(erroresEstructura == ""){
        mostrarTexto("lblValidacion","ESTRUCTURA VÁLIDA");
        mostrarTexto("lblErrores",erroresEstructura);
        //MOSTRAR PROVINCIA A LA QUE PERTENECE
        provincia=obtenerProvincia(placa);
        if(provincia != null){
            mostrarTexto("lblProvincia",provincia);
        }else{
            mostrarTexto("lblProvincia","PROVINCIA INCORRECTA")
        }
        //MOSTRAR TIPO VEHICULO
        tipoVehiculo=obtenerTipoVehiculo(placa);
        if(tipoVehiculo != null){
            mostrarTexto("lblTipoVehiculo",tipoVehiculo);
        }else{
            mostrarTexto("lblTipoVehiculo","TIPO VEHICULO INCORRECTO"); 
        }
        //MOSTRAR PICO Y PLACA
        diaPicoYPlaca=obtenerPicoYPlaca(placa);
        if(diaPicoYPlaca != null){
            mostrarTexto("lblPicoYPlaca",diaPicoYPlaca);
        }
    }else{
        mostrarTexto("lblValidacion","ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores",erroresEstructura);
        mostrarTexto("lblProvincia","")
        mostrarTexto("lblTipoVehiculo","");
        mostrarTexto("lblPicoYPlaca","");
    }
};