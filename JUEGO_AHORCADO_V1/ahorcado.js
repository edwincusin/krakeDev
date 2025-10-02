//No se olvide de respirar, mantenga la calma y demuestre lo que sabe : 1, 2 Y 3 A COMENZAR. 
//variables globales
let palabraSecreta="";
let intentos=0;
let coicidencias=0;
let errores=0;



//FUNCION PARA VALIDAR SI ES MAYUSCULA
esMayuscula=function(caracter){
    let codigoCaracter=caracter.charCodeAt(0);
    if((codigoCaracter >= 65) && (codigoCaracter <= 90)){
        return true;
    }else{
        return false;
    }
}; 

//FUNCION GUARDAR EL CUAL VA HA SER INVOCADA DESDE EL BOTON GUARDAR
guardarPalabra=function(){
    let cmpTxtSecreta=document.getElementById("txtSecreta");
    let valorTxtSecreta=cmpTxtSecreta.value;
    let esPalabraCincoLetras=false;
    let longitudCadena=valorTxtSecreta.length-1;
    let contadorMayusculas=0;
    let letraIterada;
    
    if(valorTxtSecreta.length == 5){
        esPalabraCincoLetras=true;
        console.log("cumple 5 caracteres")//// LINEA PARA PROBRAR EN CONSOLA
    }
    for(let i=0; i <= longitudCadena;i++){
        letraIterada=valorTxtSecreta.charAt(i);
        if(esMayuscula(letraIterada)){
            contadorMayusculas++;
        }
    }
    console.log(contadorMayusculas); // LINEA PARA PROBRAR EN CONSOLA

    if((esPalabraCincoLetras == true) && (contadorMayusculas == 5)){
        palabraSecreta=valorTxtSecreta;
        console.log("palabra secreta guardad con exito "+palabraSecreta); // LINEA PARA PROBRAR EN CONSOLA
    }else{
        alert("LA PALABRA DEBE TENER 5 LETRAS MAYUSCULAS.");
    }
       
};

//FUNCION MOSTRAR LETRA 
mostrarLetra=function(letra,posicion){
    if(posicion == 0){
        mostrarTexto("div0",letra);
    }
    if(posicion == 1){
        mostrarTexto("div1",letra);
    }
    if(posicion == 2){
        mostrarTexto("div2",letra);
    }
    if(posicion == 3){
        mostrarTexto("div3",letra);
    }
    if(posicion == 4){
        mostrarTexto("div4",letra);
    }
};

//FUNCION VALIDAR
validar=function(letra){
    let letrasEncontradas=0;
    for(let i=0;i<=palabraSecreta.length-1;i++){
        if(palabraSecreta.charAt(i) == letra){
            letrasEncontradas++;
            mostrarLetra(palabraSecreta.charAt(i),i);
        }
    }
    coicidencias=coicidencias+letrasEncontradas;
    if(letrasEncontradas == 0){
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
    }
};

// FUNCION INGRESAR LETRA LA CUAL SERA INVOCADA DESDE EL BOTON VALIDAR 
ingresarletra=function(){
    let valorTxtLetra=recuperarTexto("txtLetra");
    if(esMayuscula(valorTxtLetra)){
        validar(valorTxtLetra);
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
    intentos++; //incremento de intentos 
    console.log("numero intentos "+intentos);// LINEA PARA PROBRAR EN CONSOLA
    console.log("numero coicidencias "+coicidencias);// LINEA PARA PROBRAR EN CONSOLA
    if(coicidencias == 5){
        alert("HA GANADO")
    }
    if(intentos == 10){
        alert("HA PERDIDO")
    }

};