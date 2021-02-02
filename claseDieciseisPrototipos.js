function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () { }
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.a = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.a}`)
}

Persona.prototype.soyAlto = function () {
    if (this.altura >= 1.8) {
        console.log('Soy Alto')
    } else {
        console.log('soy bajo')
    }
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}
heredaDe(Desarrollador, Persona)


Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

// var ali = new Persona('Ali', 'XEagle', 1.8)
// var arantza = new Persona('Arantza', 'San', 1.6)



