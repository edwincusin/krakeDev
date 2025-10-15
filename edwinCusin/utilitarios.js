//funcion para mostrar img
mostrarImagen = function(idComponente, rutaImagen) {
    let componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
};

//funcion para mostrar texto
mostrarTexto = function(idComponente, mensaje) {
    let componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
};

//funcion mostrar texto en  una caja
mostrarTextoEnCaja = function(idComponente, mensaje) {
    let componente = document.getElementById(idComponente);
    componente.value = mensaje;
};

//funcion para recuperar texto
recuperarTexto = function(idComponente) {
    let componente = document.getElementById(idComponente);
    let valorIngresado = componente.value;
    return valorIngresado;
};

//funcion para recuperar valor int
recuperarInt = function(idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
};

//funcion para recuperar valor float
recuperarFloat = function(idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFloat = (parseFloat(valorCaja)).toFixed(2);
    return valorFloat;
};

//funcion para mostrar datos en una tabla
mostrarTabla = function(idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerHTML = mensaje;
};

//funcion para recuperar texto de un DIV
recuperarTextoDiv = function(idComponente) {
    let cmp = document.getElementById(idComponente);
    let valorTextoCapturado = cmp.textContent;
    return valorTextoCapturado;
};

//funcion para recuperar float de un DIV
recuperarFloatDiv = function(idComponente) {
    let cmp = document.getElementById(idComponente);
    let valorFloatCapturado = parseFloat(cmp.textContent);
    return valorFloatCapturado;
};

//funcion para recuperar int de un DIV
recuperarIntDiv = function(idComponente) {
    let cmp = document.getElementById(idComponente);
    let valorIntCapturado = parseInt(cmp.textContent);
    return valorIntCapturado;
};

// VARIOS PROPIEDADES PARA CONTROLES DE BOTONES Y TEXTOS
mostrarComponente = function(idComponente) {
    document.getElementById(idComponente).style.display = "block";
};

ocultarComponente = function(idComponente) {
    document.getElementById(idComponente).style.display = "none";
};

deshabilitarComponente = function(idComponente) {
    document.getElementById(idComponente).disabled = true;
};

habilitarComponente = function(idComponente) {
    document.getElementById(idComponente).disabled = false;
};