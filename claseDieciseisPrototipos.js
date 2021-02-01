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

var ali = new Persona('Ali', 'XEagle', 1.8)
var arantza = new Persona('Arantza', 'San', 1.6)



