let usuario = {
    nombre: "Carlos",
    correo: "carlos@email.com"
};

// Dot notation
console.log(usuario.nombre);

// Bracket notation
console.log(usuario["correo"]);

// Agregar propiedades
usuario.telefono = "123-456-789";

// Eliminar propiedades
delete usuario.telefono;