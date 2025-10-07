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