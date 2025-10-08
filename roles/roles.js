// ARRAY GLOBAL CON VARIOS OBJETOS CON ATRIBUTOS INICIALIZADOS
let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1753081056", nombre: "Edwin", apellido: "Cusin", sueldo: 700.0 }
];

//FUNCION MOSTRSR OPCION EMPLEADO 
mostrarOpcionEmpleado = function() {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
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