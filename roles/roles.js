// ARRAY GLOBAL CON VARIOS OBJETOS CON ATRIBUTOS INICIALIZADOS
let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1753081056", nombre: "Edwin", apellido: "Cusin", sueldo: 700.0 }
];
//VARIABLE GLOBAL 
let esNuevo = false;

//FUNCION MOSTRSR OPCION EMPLEADO 
mostrarOpcionEmpleado = function() {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
    mostrarEmpleados(); //MOSTRAR TABLA EMPLEADOS
};

//FUNCION MOSTRSR OPCION ROL 
mostrarOpcionRol = function() {
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
};

//FUNCION MOSTRSR OPCION RESUMEN 
mostrarOpcionResumen = function() {
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
};

// FUNCION MOSTRAR EMPLEADOS 
mostrarEmpleados = function() {
    let contenidoTabla = "<table>" +
        "<tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>";
    let elementoEmpleado;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        contenidoTabla += "<tr>" +
            "<td>" + elementoEmpleado.cedula + "</td>" +
            "<td>" + elementoEmpleado.nombre + "</td>" +
            "<td>" + elementoEmpleado.apellido + "</td>" +
            "<td>" + elementoEmpleado.sueldo + "</td>" +
            "</tr>";
    }
    contenidoTabla += "</table>"
    mostrarTabla("tablaEmpleados", contenidoTabla);
};

//FUNCION EJECUTAR NUEVO 
ejecutarNuevo = function() {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
};

//FUNCION BUSCAR EMPLEADO
buscarEmpleado = function(cedula) {
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
            break;
        }
    }
    return empleadoEncontrado;
};

//FUNCION AGREGAR EMPLEADO
agregarEmpleado = function(empleado) {
    let resultadoBuscar = buscarEmpleado(empleado.cedula);
    if (resultadoBuscar == null) {
        empleados.push(empleado);

        return true;
    } else {

        return false;
    }
};

//FUNCION GUARDAR
guardar = function() {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarTexto("txtSueldo");




    if (validarCajaTextoCedula(valorCedula) && validarCajaTextoNombre(valorNombre) && validarCajaTexApellido(valorApellido) && validarCajaTextoSueldo(valorSueldo)) {
        if (esNuevo == true) {
            let nuevoEmpleado = {};
            nuevoEmpleado.cedula = valorCedula;
            nuevoEmpleado.nombre = valorNombre;
            nuevoEmpleado.apellido = valorApellido;
            nuevoEmpleado.sueldo = valorSueldo;

            let resultadoAgregarEmpleado = agregarEmpleado(nuevoEmpleado);
            if (resultadoAgregarEmpleado == true) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE"); // linea para confirmar registro
                mostrarEmpleados();
            } else {
                alert("YA EXISTE REGISTRO CON LA CEDULA " + valorCedula); // linea para confirmar registro
            }
        }
    } else {
        alert("imposible reg")
    }
};


//funcion validar 10 caracteres digitos cedula
validarCajaTextoCedula = function(cedula) {
    let longitudCedula = cedula.length;
    let error = false;

    if ((cedula == "")) {
        mostrarTexto("lblErrorCedula", "Campo obligatorio*");
        error = true;
    } else if ((longitudCedula != 10)) {
        mostrarTexto("lblErrorCedula", "Cedula debe tener 10 digitos");
        error = true;
    } else if (isNaN(cedula)) {
        mostrarTexto("lblErrorCedula", "Ingresar solo digitos");
        error = true;
    } else {
        mostrarTexto("lblErrorCedula", "");
    }

    return !error;
};

//funcion validar  caja texto de nombre 
validarCajaTextoNombre = function(nombre) {
    let longitudNombre = nombre.length;
    let error = false;
    if ((nombre == "")) {
        mostrarTexto("lblErrorNombre", "Campo obligatorio*");
        error = true;
    } else if ((longitudNombre < 3)) {
        mostrarTexto("lblErrorNombre", "Ingresar minimo 3 caracteres");
        error = true;
    } else if (esCadenaMayuscula(nombre) == false) {
        mostrarTexto("lblErrorNombre", "Se permite solo mayusculas");
        error = true;
    } else {
        mostrarTexto("lblErrorNombre", "");
    }
    return !error;
};

//funcion validar  caja texto de  apellido
validarCajaTexApellido = function(nombre) {
    let longitudNombre = nombre.length;
    let error = false;
    if ((nombre == "")) {
        mostrarTexto("lblErrorApellido", "Campo obligatorio*");
        error = true;
    } else if ((longitudNombre < 3)) {
        mostrarTexto("lblErrorApellido", "Ingresar minimo 3 caracteres");
        error = true;
    } else if (esCadenaMayuscula(nombre) == false) {
        mostrarTexto("lblErrorApellido", "Se permite solo mayusculas");
        error = true;
    } else {
        mostrarTexto("lblErrorApellido", "");
    }
    return !error;
};

//funcion validar  caja texto de  sueldo
validarCajaTextoSueldo = function(sueldo) {
    let error = false;
    let esFloat = sueldo % 1;
    if (sueldo == "") {
        mostrarTexto("lblErrorSueldo", "Campo obligatorio*");
        error = true;
    } else if (isNaN(sueldo)) {
        mostrarTexto("lblErrorSueldo", "Ingresar solo digitos");
        error = true;
    } else if (sueldo < 400 || sueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "Valor permitido entre 400 y 5000");
        error = true;
    } else if (esFloat == 0) {
        mostrarTexto("lblErrorSueldo", "Debe ser un float ejem:500.14");
        error = true;
    } else {
        mostrarTexto("lblErrorSueldo", "");
    }
    return !error;
};

//funcion es mayuscula
esCadenaMayuscula = function(cadena) {
    let codigoLetra;
    let esMayuscula = true;
    for (let i = 0; i < cadena.length; i++) {
        codigoLetra = cadena.charCodeAt(i);
        if ((codigoLetra < 65) || (codigoLetra > 90)) {
            esMayuscula = false;
            break;
        }
    }
    return esMayuscula;
};