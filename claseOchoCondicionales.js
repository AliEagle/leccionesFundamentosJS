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



function imprimeSiMayorDeEdad(persona) {
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} no es mayor de edad`);
    }
}

imprimeSiMayorDeEdad(ali)
imprimeProfesion(ali)