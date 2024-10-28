// forEach //
let numbers = [1, 2, 3, 4, 5];

numeros.forEach((numero, indice) => {
    console.log(`Número ${numero} en posición ${indice}`);
});

// map //
let precios = [100, 200, 300];
let preciosConIVA = precios.map(precio => precio * 1.16);

// filter //
let numeros = [1, 2, 3, 4, 5, 6];
let pares = numeros.filter(num => num % 2 === 0);

// reduce //
let numeros2 = [1, 2, 3, 4, 5];
let suma = numeros.reduce((acum, actual) => acum + actual, 0);
