//generar numero aleatorio
generarNumeroAleatorio=function(){
    let aleatorio=Math.random();
    let numeroMultiplicado=aleatorio*100;
    let numeroEntero=parseInt(numeroMultiplicado);
    let valor=numeroEntero+1;
    console.log(valor); //LINEA PARA PROBAR EN CONSOLA FUNCIONALIDAD
    return valor;
};

//Generar Aleatorios 
generarAleatorios=function(){
    let aleatorios=[];
     let valorNumeroCaja=0;
    let numeroIngresado=recuperarInt("txtCajaTexto");
    if(validarNumero(numeroIngresado) == true){
        valorNumeroCaja=numeroIngresado;
    }else{
        alert("NUMERO DEBE SER DE 5 A 20 INCLUIDOS, VUELVA A INTENTAR");
        mostrarTextoEnCaja("txtCajaTexto","");
        valorNumeroCaja=0;
    }
    let aleatorioResultadoIterada;
    for(let i=0;i<valorNumeroCaja;i++){
        console.log(i); //  //LINEA PARA PROBAR EN CONSOLA FUNCIONALIDAD INDICE ITERADA
        aleatorioResultadoIterada=generarNumeroAleatorio();
        //aleatorios[i]=aleatorioResultadoIterada; // otra forma de agregar elementos al arreglo
        aleatorios.push(aleatorioResultadoIterada);
    }

    mostrarResultados(aleatorios);

};

//funcion mostrar resultados
mostrarResultados=function(arregloNumeros){
    let numeroAleatorio;
    let contenidoTabla="<table><tr><th>NUMEROS ALEATORIOS</th><tr>";
    let cmptabla=document.getElementById("divTabla");
    for(let i=0;i<arregloNumeros.length;i++){
        //numeroAleatorio=arregloNumeros[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=arregloNumeros[i];
        contenidoTabla+="</tr></td>";
    }
    contenidoTabla+="</table>";
    cmptabla.innerHTML=contenidoTabla;
};


//validar numero entre 5 y 20 
validarNumero=function(numero){
    if((numero >=5) && (numero <=20)){
        return true;
    }else{
        return false;
    }
};