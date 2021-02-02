class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
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

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
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
var panfi = new Persona('Panfi', 'X', 1)

ali.saludar()
arantza.saludar()
panfi.saludar()



