//Cuenta regresiva
let countdown = 5;
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log("¡Despegue! 🚀");

// do while //

let i = 1;
do {
    console.log(`Iteración ${i}`);
    i++;
} while (i <= 3);

// Ejemplo de break
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}

// Ejemplo de continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}