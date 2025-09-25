calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    //let porcentajeDescuento;

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    nombreProducto=recuperarTexto("txtProducto");
    precioProducto=recuperarFloat("txtPrecio");
    cantidad=recuperarInt("txtCantidad");


    
    
    if((esCantidadValida(cantidad,"lblError2")) & (esPrecioValido(precioProducto,"lblError3"))){
        valorSubtotal=calcularSubtotal(precioProducto,cantidad);
        mostrarTexto("lblSubtotal",valorSubtotal);
        valorDescuento=calcularDescuentoPorVolumen(valorSubtotal,cantidad);
        mostrarTexto("lblDescuento",valorDescuento);
        valorIVA=calcularIVA(valorSubtotal-valorDescuento).toFixed(2);
        mostrarTexto("lblValorIVA",valorIVA); 
        valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
        mostrarTexto("lblTotal",valorTotal);
    }else{
        mostrarTexto("lblSubtotal","0.0");
        mostrarTexto("lblDescuento","0.0");
        mostrarTexto("lblValorIVA","0.0");
        mostrarTexto("lblTotal","0.0");
    }

};


esCantidadValida=function(cantidad,idComponente){
    let existeError=false;

    if(isNaN(cantidad)){
        mostrarTexto(idComponente,"DEBE INGRESAR UN NUMERO");
        existeError=true;
    }
    if(cantidad < 1 || cantidad > 100){
        mostrarTexto(idComponente,"CANTIDAD DEBE SER DE 1 A 100");
        existeError=true;
    }   
    if(existeError == false){
        mostrarTexto(idComponente,"");
    }    
    return !existeError;
};

esPrecioValido=function(precio,idComponente){
    let existeError=false;

    if(isNaN(precio)){
        mostrarTexto(idComponente,"DEBE INGRESAR UN NUMERO");
        existeError=true;
    }
    if(precio < 1 || precio > 50){
        mostrarTexto(idComponente,"CANTIDAD DEBE SER DE 1 A 50");
        existeError=true;
    }   
    if(existeError == false){
        mostrarTexto(idComponente,"");
    }    
    return !existeError;
};





limpiar = function () {
    mostrarTexto("lblSubtotal","0.0");
    mostrarTexto("lblDescuento","0.0");
    mostrarTexto("lblValorIVA","0.0");
    mostrarTexto("lblTotal","0.0");
    mostrarTextoEnCaja("txtProducto","");
    mostrarTextoEnCaja("txtCantidad","");
    mostrarTextoEnCaja("txtPrecio","");
};