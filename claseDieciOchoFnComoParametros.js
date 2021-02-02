class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido)
        }
    }

    soyAlto() {
        if (this.altura >= 1.8) {
            console.log('Soy Alto')
        } else {
            console.log('soy bajo')
        }
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        /*
        var nombre = this.nombre
        var apellido = this.apellido
        */

        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`A, no sabía que eres Dev`)
    }
}

var ali = new Persona('Ali', 'XEagle', 1.8)
var arantza = new Persona('Arantza', 'San', 1.6)
var panfi = new Desarrollador('Panfi', 'X', 1)

ali.saludar()
arantza.saludar(responderSaludo)
panfi.saludar(responderSaludo)



