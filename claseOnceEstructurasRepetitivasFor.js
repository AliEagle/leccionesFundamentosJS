var ali = {
    nombre: 'Ali',
    apellido: 'XEagle',
    edad: 30,
    peso: 75
}

console.log(`Al inicio del año ${ali.nombre} pesa ${ali.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO


for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(ali)
    } else if (random < 0.5) {
        bajarDePeso(ali)
    }

}


console.log(`Al final del año ${ali.nombre} pesa ${ali.peso.toFixed(1)}kg`)