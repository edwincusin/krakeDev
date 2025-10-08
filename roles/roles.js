// ARRAY CON VARIOS OBJETOS CON ATRIBUTOS -- GLOBAL
let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 }
];

//FUNCION MOSTRSR OPCION EMPLEADO 
mostrarOpcionEmpleado = function() {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
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