var ali = {
    nombre: 'Ali',
    apellido: 'XEagle',
    edad: 28
}

var aurelio = {
    nombre: 'Aurelio',
    apellido: 'Garduño',
    edad: 45
}

/*
// Opción uno para escribir la función accediendo a los atributos del objeto al invocar la función.

function imprimirNombreMayusculas(nombre) {
    nombre = nombre.toLocaleUpperCase()
    console.log(nombre)
}

imprimirNombreMayusculas(ali.nombre)
imprimirNombreMayusculas(aurelio.nombre)
*/

/*
// Opción dos, se declara una variable local nombre lo cual es igual a la referencia del parámetro parseado de la función y se accede a su atributo nombre a través del (.), all hacer esto, se puede quitar la notación del punto en el parámetro parseado.

function imprimirNombreMayusculas(persona) {
    var nombre = persona.nombre.toLocaleUpperCase()
    console.log(nombre)
}

imprimirNombreMayusculas(ali)
imprimirNombreMayusculas(aurelio)
*/

/*
// Opción tres, se hace console.log directamente del atributo deseado con (.) del parámetro parseado a la función.

function imprimirNombreMayusculas(persona) {
    console.log(persona.nombre.toLocaleUpperCase())
}

imprimirNombreMayusculas(ali)
imprimirNombreMayusculas(aurelio)
*/


// Opción cuatro, al declarar la función, establecemos que su parámetro sera el atributo específico del objeto deseado escribiendo ese atributo entre corchetes.

function imprimirNombreMayusculas({ nombre }) {
    console.log(nombre.toLocaleUpperCase())
}

imprimirNombreMayusculas(ali)
imprimirNombreMayusculas(aurelio)
// En caso de querer agregar un nuevo objeto se haría de la siguiente manera.
imprimirNombreMayusculas({ nombre: 'Lilu' })
