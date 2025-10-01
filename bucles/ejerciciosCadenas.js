ejecutarPrueba1=function(){
    let mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
};
recorrerCadena=function(cadena){
    //0123
    //juan
    let caracter;
    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("caracter "+caracter+" posicion "+posicion);
    }
    for(let posicion=0;posicion<=cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("CARACTER "+caracter+" POSICION "+posicion);
    }
};

//reto 38 invertir cadena

invertirCadena=function(cadena){
    let letra="";
    let resultado="";
    for(let posicion=cadena.length;posicion>=0;posicion--){
        letra=cadena.charAt(posicion);
        resultado=resultado+letra;
    }        
    return resultado;
};

ejecutarPrueba2=function(){
    let mensaje=recuperarTexto("txtCadena");
    let cadenaInvertida=invertirCadena(mensaje);
    mostrarTexto("lblResultado",cadenaInvertida);
};

// funcion para buscar letra en una cadena
buscarLetra=function(cadena, letra){
    let letraIterada;
    let existeLetra=false;
    for(let i=0;i<=cadena.length;i++){
        letraIterada=cadena.charAt(i);
        if(letraIterada==letra){
            existeLetra=true;
        }
    }

    if(existeLetra==true){
        return true;
    }else{
        return false
    }

};