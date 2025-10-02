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