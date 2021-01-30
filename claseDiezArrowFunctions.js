var ali = {
    nombre: 'Ali',
    apellido: 'XEagle',
    edad: 30,
    ingeniero: true,
    concinero: false,
    cantante: true,
    dj: false,
    guitarrista: true,
    drone: false
}

var juan = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 12
}

const MAYORIA_DE_EDAD = 18

// Puliendo código de clase anterior

//1.- Empezamos for volver la función esMayorDeEdad Anónima y como buena práctica, en vez de asignarlo a una variable, lo asignamos a una constante, que come se mencionó, por buena práctica, se escriben en mayúsculas y con guiones bajos.

//2.- Con arrow function, podemos borrar la palabra function.

//3.- Cuando tenemos un sólo parámetro en la función, podemos obviar los paréntesis.

//4.- JS Permite que si una función lo único que hace es retornar algo, podemos borrar el return y borrar las llaves que rodean al cuerpo de la función. 

//5.- Ya que solo nos interesa el atributo de edad, podemos desestructurar el objeto. Para hacer esto no podemos solo poner las llaves directamente en persona, lo que se hace es, poner paréntesis y entre parentis las llaves que llevarán el parámetro a desestructurar, una vez echo esto, podemos borrar persona por completo. Pasando de esto: const ES_MAYOR_DE_EDAD = persona => persona.edad >= MAYORIA_DE_EDAD - a esto -  const ES_MAYOR_DE_EDAD = ({edad}) => edad >= MAYORIA_DE_EDAD


const ES_MAYOR_DE_EDAD = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimeSiMayorDeEdad(persona) {
    if (ES_MAYOR_DE_EDAD(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else if (ES_MENOR_DE_EDAD(persona)) {
        console.log(`${persona.nombre} no es mayor de edad`);
    }
}

// Nueva función para permitir accesso si mayor de edad




function permiteAcceso(persona) {
    if (!ES_MAYOR_DE_EDAD(persona)) {
        console.log('ACCESO DENEGADO')
    } else {
        console.log(`Bienvenido ${persona.nombre}`);
    }
}


//

// Nueva función para permitir accesso si mayor de edad en version arrow function 

const ES_MENOR_DE_EDAD = ({ edad }) => edad <= MAYORIA_DE_EDAD
