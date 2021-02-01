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
function imprimirNombreMayusculas({ nombre }) {
    console.log(nombre.toLocaleUpperCase())
}

imprimirNombreMayusculas(ali)
imprimirNombreMayusculas(aurelio)
// En caso de querer agregar un nuevo objeto se haría de la siguiente manera.
imprimirNombreMayusculas({ nombre: 'Lilu' })
*/

// En el ejemplo de abajo de desestructura el objeto. Se parséa el parámetro persona, se declara el atributo del objeto deseado entre corchetes  como variable siendo esta igual al parámetro de la función. De esta manera al parsearse el parámetro en la función, este entra y el atributo deseado (en este caso nombre) se guarda en la variable nombre con relación al atributo mismo, lo que permite que el console.log pueda acceder al atributo nombre.

function imprimirNombreMayusculas(persona) {
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toLocaleUpperCase())
}

imprimirNombreMayusculas(ali)
imprimirNombreMayusculas(aurelio)
// En caso de querer agregar un nuevo objeto se haría de la siguiente manera.
imprimirNombreMayusculas({ nombre: 'Lilu' })

// En el ejemplo de abajo, de igual manera de declara una variable con LOS ATRIBUTOS deseados del parámetro parseado a la función de igual manera siendo esta variable equivalente al parámetro en si, lo que permite que el console.log pueda acceder al atributo nombre. NOTA: Fijarse que ambos atributos son incluidos dentro de los corchetes de la variable declarada.



const IMPRIMIR_NOMBRE_Y_EDAD = ({ nombre, edad }) =>
    console.log(`Hola, me llamo ${nombre.toLocaleUpperCase()} y tengo ${edad} años de edad`)

function imprimeNombreYEdad(persona) {
    var { nombre, edad } = persona
    console.log(`Hola, me llamo ${nombre.toLocaleUpperCase()} y tengo ${edad} años de edad`)
}

IMPRIMIR_NOMBRE_Y_EDAD(ali)
imprimeNombreYEdad(aurelio)