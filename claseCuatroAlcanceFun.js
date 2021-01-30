// Con el ejemplo de abajo, la variable nombre al entrar a la función será afectada por cualquier cambio realizado en la función.

/*
var nombre = "Ali";

function imprimirNombreMayusculas() {
    nombre = nombre.toLocaleUpperCase()
    console.log(nombre)
}

imprimirNombreMayusculas()
*/

// En el codigo de abajo, utilizamos el parametro n dentro de la función y creamos la variable local para hacer referencia a ello sin afectar la variable global al ejecutar la función.

/*
var nombre = "Ali";

function imprimirNombreMayusculas(n) {
    n = n.toLocaleUpperCase()
    console.log(n)
}

imprimirNombreMayusculas(nombre)
*/

var nombre = "Ali";

function imprimirNombreMayusculas(nombre) {
    nombre = nombre.toLocaleUpperCase()
    console.log(nombre)
}

imprimirNombreMayusculas(nombre)