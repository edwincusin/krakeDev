//FUNCION CALCULAR TASA INTERES_________________________________________________
calcularTasaInteres=function(ingresoAnual){
    let tasaInteres;
    if(ingresoAnual < 300000){
        tasaInteres=(ingresoAnual*16)/100;
    } else if(ingresoAnual >= 300000 && ingresoAnual < 500000){
        tasaInteres=(ingresoAnual*15)/100;
    }else if(ingresoAnual >= 500000 && ingresoAnual < 1000000){
        tasaInteres=(ingresoAnual*14)/100;
    }else if(ingresoAnual >= 1000000 && ingresoAnual < 2000000){
        tasaInteres=(ingresoAnual*13)/100;
    }else if(ingresoAnual >= 2000000 ){
        tasaInteres=(ingresoAnual*12)/100;
    }
    return (tasaInteres);
};

//FUNCION CALCULAR CAPACIDAD DE PAGO_________________________________________________ 
calcularCapacidadPago=function(edad,ingresos, egresos){
    let sobra=ingresos-egresos;
    let valorCuotaMensual;
    
    if(edad > 50){
        valorCuotaMensual=(sobra*30)/100;   
    }else if(edad <= 50){
        valorCuotaMensual=(sobra*40)/100;
    } 
    
    return "CAPACIDAD MENSUAL ES "+valorCuotaMensual;
};

//FUNCION CALCULAR DESCUENTO_________________________________________________
calcularDescuento=function(precio, cantidad){
    let descuento, subTotal, valorPagar;

    if(cantidad < 3){
        valorPagar=precio*cantidad;

    }else if(cantidad >= 3 && cantidad <= 5){
        subTotal=precio*cantidad;
        descuento=(subTotal*2)/100;
        valorPagar=subTotal-descuento;

    }else if(cantidad >= 6 && cantidad <= 11){
        subTotal=precio*cantidad;
        descuento=(subTotal*3)/100;
        valorPagar=subTotal-descuento;

    }else if(cantidad >= 12){
        subTotal=precio*cantidad;
        descuento=(subTotal*4)/100;
        valorPagar=subTotal-descuento;
    }

    return valorPagar;
};

//FUNCION DETERMINAR COLESTEROL_________________________________________________
determinarColesterolLDL=function(nivelColesterol){
    let texto;

    if(nivelColesterol < 170 && nivelColesterol >=120){
        texto= "COLESTEROL TOTAL";
    }else if(nivelColesterol < 120 && nivelColesterol >= 110){
        texto= "COLESTEROL No-HDL";
    }else if(nivelColesterol < 110 && nivelColesterol >= 60){
        texto= "COLESTEROL LDL";
    }else if(nivelColesterol < 60 && nivelColesterol >= 45){
        texto= "COLESTEROL HDL";
    }

    return texto;
};

//FUNCION VALIDAR CLAVE_________________________________________________
validarClave=function(clave){
    let tamanio=clave.length;
    let respuesta;
    if(tamanio >= 8 && tamanio <=16){
        respuesta=true;
    }else{
        respuesta=false;
    }

    return respuesta;
};

//FUNCION ES MAYUSCULA_________________________________________________
esMayuscula=function(caracter){
    let codigoLetra=caracter.charCodeAt(0);
    let respuesta;
    if(codigoLetra >=65 && codigoLetra <=90){
        respuesta=true;
    }else{
        respuesta=false;
    }
    return respuesta;
};

//FUNCION ES MINUSCULA_________________________________________________
esMinuscula=function(caracter){
    let codigoLetra=caracter.charCodeAt(0);
    let respuesta;
    if(codigoLetra >=97 && codigoLetra <=122){
        respuesta=true;
    }else{
        respuesta=false;
    }
    return respuesta;
};

//FUNCION ES DIGITO_________________________________________________
esDigito=function(caracter){
    let codigoDigito=caracter.charCodeAt(0);
    let respuesta;
    if(codigoDigito >=48 && codigoDigito <=57){
        respuesta=true;
    }else{
        respuesta=false;
    }
    return respuesta;
};

//FUNCION DAR PERMISO_________________________________________________
darPermiso=function(notaMatematica, notaFisica, notaGeometria){
    let respuesta;
    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90){
        respuesta=true;
    }else{
        respuesta=false;
    }
    return respuesta;
};

//FUNCION OTORGAR PERMISO_________________________________________________
otorgarPermiso=function(notaMatematica, notaFisica, notaGeometria){
    let respuesta;
    if((notaMatematica > 90 || notaFisica > 90) && (notaGeometria > 80)){
        respuesta=true;
    }else{
        respuesta=false;
    }
    return respuesta;
};

//FUNCION DEJAR SALIR_________________________________________________
dejarSalir=function(notaMatematica, notaFisica, notaGeometria){
    let respuesta;
    if((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) && (notaFisica > notaMatematica)){
        respuesta=true;
    }else{
        respuesta=false;
    }
    return respuesta;
};
