//funcion para calcular valor descuento
calcularValorDescuento=function(monto,porcentajeDescuento){
    let descuento=(monto*porcentajeDescuento)/100;
    return descuento;
};

//funcion calcular iva 12>%
calcularIva=function(monto){
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
    let total=subtotal+descuento+iva;
    return total;
};
