let notas=[];
agregarElementos=function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
};

probarAgregar=function(){
    let notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
};

agregarNota=function(nota){
    notas.push(nota);
    mostrarNotas();
};

recorrerArreglo=function(){
    let notaR;
    for(let i=0;i<notas.length;i++){
        notaR=notas[i];
        console.log(notaR);
    }
};

// FUNCION CALCULAR PROMEDIO
calcularPromedio=function(){
    let sumaNotas=0;
    let promedio=0;

    //sumar notas con for
    for(i=0;i<=notas.length-1;i++){
        sumaNotas=sumaNotas+notas[i];
    }
    promedio=(sumaNotas)/notas.length;
    return promedio.toFixed(2);
};

//funcio ejecutar promedio
ejecutarPromedio=function(){
    let promedio=calcularPromedio();
    mostrarTexto("lblPromedio",promedio);
};

generarTabla=function(){
    let contenidoTabla="";
    let cmpTabla=document.getElementById("divTabla");
    contenidoTabla+="<table><tr><td>UNO</td></tr>"+
    "<tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML=contenidoTabla;
};

mostrarNotas=function(){
    let miNota;
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NOTAS</th></tr>"
    for(let i=0;i<notas.length;i++){
        miNota=notas[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</tr></td>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
};