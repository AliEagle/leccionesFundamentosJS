var edad = 30
edad += 1 // edad = edad + 1
var peso = 101
peso -= 1 // peso = peso - 1
var sandwich = 5
peso += sandwich // peso = peso + sandwich
var jugarFutbol = 3
peso -= jugarFutbol // peso = peso - jugarFutbol
var precioDeVino = 200.3
var totalSinArrglarDecimales = precioDeVino * 3 // returns 600.9000000000001 because of JS pecularities
var totalArreglandoDecimales = precioDeVino * 100 * 3 / 100 // returns 600.9
var totalRedondeandoConMathround = Math.round(precioDeVino * 3) // returns 601
var totalArreglandoDecimalesConMathround = Math.round(precioDeVino * 100 * 3) / 100 // returns 600.9
var totalStr = totalArreglandoDecimalesConMathround.toFixed(2) // returns "600.90" Notar que devuelve un string
var totaldeStrANum = parseFloat(totalStr) // returns 600.9 parsea Str a Num
var pizza = 8
var personas = 2
var porcionesPorPersona = pizza / personas

