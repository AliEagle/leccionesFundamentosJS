var ali = {
    nombre: 'Ali',
    apellido: 'XEagle',
    edad: 30,
    peso: 75
}

console.log(`Al inicio del año ${ali.nombre} pesa ${ali.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const ralizaDeporte = () => Math.random() < 0.4

const META = ali.peso - 3
var dias = 0

while (ali.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(ali)
    }
    if (ralizaDeporte) {
        bajarDePeso(ali)
    }

    dias += 1
}

console.log(`Pasaron ${dias} días hasta que  ${ali.nombre} adelgazó 3kg`)