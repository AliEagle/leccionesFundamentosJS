
const pablo = {
    nombre: 'Pablo',
    apellido: 'Andrés',
}
const mariela = {
    nombre: 'Mariela',
    apellido: 'Riesnik',
}

function saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`)
}

// const saludarAPablo = saludar.bind(pablo)
// const saludarAMariela = saludar.bind(mariela)

/*
//Closure
const crearSaludo = (finalDeFrase) => {
    return function (nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('guey')
const saludoColombiano = crearSaludo('parce')

saludoArgentino('ali')
saludoMexicano('ali')
saludoColombiano('ali')
*/


/*
const factorial = n => {
    if (!this.cache) {
        this.cache = {}
    }
    if (this.cache[n]) {
        return this.cache[i]
    }
    if (n === 1) {
        return 1
    }
    this.cache[n] = n * factorial(n - 1)
    return this.cache[n]
}
*/

/*
//Ejemplo de recursividad
const divisionEntera = (dividendo, divisor) => {
    if (dividendo < divisor) {
        return 0
    }

    return 1 + divisionEntera(dividendo - divisor, divisor)
}
*/



/*
// Dias Entre Hoy y Nacimiento
const diasEntreFechas = (fecha1, fecha2) => {
    const unDia = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fecha1 - fecha2)
    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1990, 7, 29)
*/