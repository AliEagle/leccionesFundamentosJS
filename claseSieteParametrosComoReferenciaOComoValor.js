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


function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}


cumpleanos(ali)
