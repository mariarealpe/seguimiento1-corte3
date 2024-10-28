class ValidacionError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = 'ValidacionError';
    }
} // el objetivo de este es crear un algoritmo que ayude a detectar al programador errores en este. Falta capturar el stack trace (rastreo de la pila) Falta agregar propiedades adicionales útiles