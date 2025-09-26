//funcion para calcular valor descuento
calcularValorDescuento=function(monto,porcentajeDescuento){
    let descuento=(monto*porcentajeDescuento)/100;
    return descuento;
};

//funcion calcular iva 12>%
calcularIVA=function(monto){
    let iva=(monto*12)/100;
    return iva;
};

//funcion calcular Subtotal
calcularSubtotal=function(precio,cantidad){
    let subtotal=precio*cantidad;
    return subtotal;
};

//funcion calcular total
calcularTotal=function(subtotal,descuento,iva){
    let total=subtotal-descuento+iva;

    return parseFloat(total).toFixed(2);
};

//funcion calcular descuento volumen
calcularDescuentoPorVolumen=function(subtotal,cantidad){
    let descuento;
    if(cantidad < 3){
        descuento=0;
    } else if(cantidad >= 3 && cantidad <=5){
        descuento=(subtotal*3)/100;
    }else if(cantidad >= 6 && cantidad <=11){
         descuento=(subtotal*4)/100;
    }else if(cantidad >= 12){
         descuento=(subtotal*5)/100;
    }
    return descuento;
};
