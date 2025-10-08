probarAtributos = function() {
    let persona = {
        nombre: "EDWIN",
        pellido: "CUSIN",
        edad: 24,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo == true) {
        console.log("ESTA VIVO");
    } else {
        console.log("NO ESTA VIVO");
    }
};

//funcion crear producto
crearProducto = function() {
    producto1 = {
        nombre: "BATERIAS",
        precio: 50.25,
        stock: 25
    }
    producto2 = {
        nombre: "TECLADOS",
        precio: 5.2,
        stock: 25
    }

    //imprimir en consola
    console.log("Nombre producto1: " + producto1.nombre);
    console.log("Precio producto2: " + producto2.precio);
    //condiciones if para comparar stock
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor estock");
    } else if (producto1.stock < producto2.stock) {
        console.log("Producto 2 tiene mayor estock");
    } else {
        console.log("Ambos pruductos tienen mismo estock");
    }
};

modificarAtributos = function() {
    let cuenta = {
        numero: "123456",
        saldo: 0.0
    }
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
};

crearCliente = function() {
    let cliente = {
        cedula: "1753081056",
        nombre: "EDWIN"
    }
    let cliente1 = {};
    cliente1.nombre = "ROMERO";
    cliente1.apellido = "CSN";
    cliente1.cedula = "1234567890";
};

probarIncrementarSaldo = function() {
    let cta = { numero: "12345", saldo: 34.00 };
    incrementarSaldo(cta, 100);
    console.log(cta.saldo);
};
probarDeterminarMayor = function() {
    let per1 = { nombre: "DANIEL", edad: 25 };
    let per2 = { nombre: "LUISA", edad: 29 };
    let mayor = determinarMayor(per1, per2);
    if (mayor != null) {
        console.log("EL MAYOR ES: " + mayor.nombre)
    }

};

incrementarSaldo = function(cuenta, monto) {
    cuenta.saldo += monto;
};

determinarMayor = function(persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else if (persona1.edad < persona2.edad) {
        return persona2;
    } else {
        return null;
    }
};