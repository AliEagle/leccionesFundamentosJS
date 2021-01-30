var nombre = 'Ali', edad = 28

function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} años`);
}

imprimirEdad(nombre, edad); // Ali tiene 28 años
imprimirEdad('Aurelio', 35); // Aurelio tiene 35 años
imprimirEdad('Solange', 32); // Solange tiene 32 años
imprimirEdad('Aurora', 25); // Aurora tiene 25 años
imprimirEdad(28, 'Dalia'); // 28 tiene Dalia años
imprimirEdad(); // undefined tiene undefined años
