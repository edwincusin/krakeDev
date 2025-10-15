// ARRAY GLOBAL 
let persona = [
    { nombre: "MARCOS", edad: 18 },
    { nombre: "ROBERTO", edad: 15 },
    { nombre: "KATE", edad: 25 },
    { nombre: "DIANA", edad: 12 },
    { nombre: "BENJA", edad: 5 }
];

//-----------------------------PARTE 1 AGREGAR PERSONA-----------------------
//FUNCION AGREGAR PERSONA
agregarPersona = function() {
    let valorRecuperadoNombre = recuperarTexto("txtNombre");
    let valorEdadInt = recuperarInt("txtEdad");
    let valorEdadString = recuperarTexto("txtEdad"); // para validar campo obligatorio

    if (validarCajaTxtNombre(valorRecuperadoNombre) && validarCajaTxtEdad(valorEdadInt, valorEdadString)) {
        let nuevaPersona = {};
        nuevaPersona.nombre = valorRecuperadoNombre;
        nuevaPersona.edad = valorEdadInt;

        persona.push(nuevaPersona);
        mostrarPersonas();
        alert("PERSONA AGREGADA CORRECTAMENTE: " + nuevaPersona.nombre + " " + nuevaPersona.edad);
    }

};


//funcion validar caja texto nombre
validarCajaTxtNombre = function(valorCajaNombre) {
    let longitudCadena = valorCajaNombre.length;
    let existeError = false;

    if (valorCajaNombre == "") {
        mostrarTexto("errorNombre", "Campo obligatorio *");
        existeError = true;
    } else if (longitudCadena < 3) {
        mostrarTexto("errorNombre", "Debe almenos contener 3 caracteres.");
        existeError = true;
    } else {
        mostrarTexto("errorNombre", "");
    }
    return !existeError;
};

validarCajaTxtEdad = function(valorEntero, valorString) {
    let existeError = false;
    if (valorString == "") {
        mostrarTexto("errorEdad", "Campo obligatorio * ");
        existeError = true;
    } else if (valorEntero < 1 || valorEntero > 100) {
        mostrarTexto("errorEdad", "Valor edad debe ser de 1 a 99");
        existeError = true;
    } else if (isNaN(valorEntero)) {
        mostrarTexto("errorEdad", "Debe ingresar un numero");
        existeError = true;
    } else {
        mostrarTexto("errorEdad", "");
    }
    return !existeError;
};

//-----------------------------FIN PARTE 1-----------------------------------
//-----------------------------PARTE 2 MOSTRAR PERSONAS----------------------
mostrarPersonas = function() {
    let contenidoTabla = "<table>" +
        "<tr>" +
        "<th>EDAD</th>" +
        "<th>NOMBRE</th>" +
        "</tr><tbody>";
    let elementoPersona;
    for (let i = 0; i < persona.length; i++) {
        elementoPersona = persona[i];
        contenidoTabla += "<tr>" +
            "<td>" + elementoPersona.edad + "</td>" +
            "<td>" + elementoPersona.nombre + "</td>" +
            "<tr>";
    }
    contenidoTabla += "</tbody></table>";
    mostrarTabla("tablaDatos", contenidoTabla);
};

//-----------------------------FIN PARTE 2-----------------------------------
//-----------------------------PARTE 3 BUSCAR MAYOR--------------------------
//FUNCION BUSCAR MAYOR EDAD
encontrarMayor = function() {
    let personaMayor = persona[0];
    let elementoPersona;
    for (let i = 1; i < persona.length; i++) {
        elementoPersona = persona[i];
        console.log("ACCEDIENDO A COMPARAR " + personaMayor.nombre + " " + personaMayor.edad + " CON " + elementoPersona.nombre + " " + elementoPersona.edad);
        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona;
        }
    }
    console.log("LA PERSONA MAYOR ES " + personaMayor.nombre + " " + personaMayor.edad);
    return personaMayor;
};
//FUNCION DETERMINAR MAYOR
determinarMayor = function() {
    let mayor = encontrarMayor();
    mostrarTexto("lblPersonaMayor", "Persona de mayor edad es: " + mayor.nombre + " con " + mayor.edad + " años.");
};

//FUNCION BUSCAR MENOR EDAD
encontrarMenor = function() {
    let personaMenor = persona[0];
    let elementoPersona;
    for (let i = 1; i < persona.length; i++) {
        elementoPersona = persona[i];
        console.log("ACCEDIENDO A COMPARAR " + personaMenor.nombre + " " + personaMenor.edad + " CON " + elementoPersona.nombre + " " + elementoPersona.edad);
        if (elementoPersona.edad < personaMenor.edad) {
            personaMenor = elementoPersona;
        }
    }
    console.log("LA PERSONA MENOR ES " + personaMenor.nombre + " " + personaMenor.edad);
    return personaMenor;
};
//FUNCION DETERMINAR MAYOR
determinarMenor = function() {
    let menor = encontrarMenor();
    mostrarTexto("lblPersonaMenor", "Persona de menor edad es: " + menor.nombre + " con " + menor.edad + " años.");
};

//-----------------------------PARTE 3---------------------------------------