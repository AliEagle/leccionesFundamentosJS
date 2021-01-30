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

function imprimeProfesion(persona) {
    console.log(`y es:`)
    if (persona.ingeniero) {
        console.log('Ingeniero');
    }
    if (persona.concinero) {
        console.log('Cocinero');
    }
    if (persona.cantante) {
        console.log('Cantante');
    }
    if (persona.dj) {
        console.log('dj');
    }
    if (persona.guitarrista) {
        console.log('Guitarrista');
    }
    if (persona.drone) {
        console.log('Vuela Drones');
    }
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimeSiMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} no es mayor de edad`);
    }
}

