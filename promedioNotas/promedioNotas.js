calcularPromedioNotas=function(){
    let cmpNota1=recuperarTexto("txtNota1");
    let nota1=parseFloat(cmpNota1);
    let cmpNota2=recuperarTexto("txtNota2");
    let nota2=parseFloat(cmpNota2);
    let cmpNota3=recuperarTexto("txtNota3");
    let nota3=parseFloat(cmpNota3);

    let promedio=calcularPromedio(nota1,nota2,nota3).toFixed(2);

    mostrarTexto("lblPromedio","Resultado: "+promedio);

    if(promedio < 5 && promedio > 0){
        mostrarTexto("lblCalificacion","REPROBADO");
        mostrarImagen("imgCalificacion","./reprobado.gif");
    }else if(promedio >=5 && promedio <=8){
        mostrarTexto("lblCalificacion","BUEN TRABAJO");
        mostrarImagen("imgCalificacion","./buenTrabajo.gif");
    } else if(promedio > 8 && promedio <=10){
        mostrarTexto("lblCalificacion","EXCELENTE");
        mostrarImagen("imgCalificacion","./aprobado.gif");
    }else{
        mostrarTexto("lblCalificacion","DATOS INCORRECTOS");
        mostrarImagen("imgCalificacion","./error.gif");
    }    
};