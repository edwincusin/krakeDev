//funcion saludar, 
saludar=function(){
    //recuperar valor caja texto de txtNombre
    let nombre=recuperarTexto("txtNombre");
    //recuperar valor caja texto de txtApellido
    let apellido=recuperarTexto("txtApellido");
    //recuperar int
    let edad=recuperarInt("txtEdad");
    //recuperar float
    let estatura=recuperarFloat("txtEstatura")
    //mostrar texto
    let mensajeBienvenido="Bienvenido "+nombre+" "+apellido;
    mostrarTexto("lblResultado",mensajeBienvenido);
    //mostrar img
    mostrarImagen("imgSaludo","./imagenes/saludoNaruto.gif");
    //mostrar texto en caja
    mostrarTextoEnCaja("txtNombre","");
};