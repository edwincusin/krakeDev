ejecutarValidacion=function(){
    let cmpTexto=document.getElementById("txtPassword");
    texto=cmpTexto.value;
    let validacionPaswword=validarPassword(texto);

    let cmpMensaje=document.getElementById("lblmensaje");
    if(validacionPaswword == ""){
        cmpMensaje.innerText="Password Correcto";
    }else{
        cmpMensaje.innerText=validacionPaswword;
    }   
};

validarPassword=function(password){
    let longitudCadena = password.length;
    let errores=""; 
    let existeMayuscula=false;
    let existeDigito=false;
    let existeCaracterEspecial=false;
    let caracterIterado;

    //INICIO VALIDAR LONGITUD CADENA
    if((longitudCadena<8) || (longitudCadena>16))
    {
        errores="LONGITUD MINIMA DE 8 Y MAXIMO 16 CARACTERES.   ";
    }
    //FINVALIDAR LONGITUD CADENA

    //CONTAR MAYUSCULAS Y VALIDAR
    for(let i=0; i<=longitudCadena;i++){
        caracterIterado=password.charAt(i);
        if(esMayuscula(caracterIterado)){
            existeMayuscula=true;
        }
    }
    if(existeMayuscula == false){
        errores=errores+"DEBE TENER ALMENOS UNA LETRA MAYUSCULA.   ";
    }
    //FIN CONTAR MAYUSCULAR MAS CONDICIONAL

    // INICIO CONTAR DIGITOS Y VALIDAR
    for(let i=0; i<=longitudCadena;i++){
        caracterIterado=password.charAt(i);
        if(esDigito(caracterIterado)){
            existeDigito=true;
        }
    }
    if(existeDigito == false){
        errores=errores+"DEBE TENER ALMENOS UN DIGITO.   ";
    }
    // FIN CONTAR  DIGITOS Y VALIDAR

    // INICIO CONTAR CARATERES ESPECIALES Y VALIDAR
    for(let i=0; i<=longitudCadena;i++){
        caracterIterado=password.charAt(i);
        if(esCaracterEspecial(caracterIterado)){
            existeCaracterEspecial=true;
        }
    }
    if(existeCaracterEspecial == false){
        errores=errores+"DEBE TENER ALMENOS UN UN CARACTER ESPECIAL (* - _). ";
    }
    // FIN CONTAR CARATERES ESPECIALES Y VALIDAR
    console.log(errores); // linea para hacer prueba en consola
    return errores;

};












//funcion letra mayuscula
esMayuscula=function(caracter){
    let codigoLetra=caracter.charCodeAt(0);
    if((codigoLetra >= 65) && (codigoLetra<=90)){
        return true;
    }else{
        return false;
    }
};
esDigito=function(caracter){
    let codigoDigito=caracter.charCodeAt(0);
    if((codigoDigito >= 48) && (codigoDigito<=57)){
        return true;
    }else{
        return false;
    }
};
esCaracterEspecial=function(caracter){
    let codigoDigito=caracter.charCodeAt(0);
    if((codigoDigito == 45) || (codigoDigito ==95) || (codigoDigito == 42)){
        return true;
    }else{
        return false;
    }
};