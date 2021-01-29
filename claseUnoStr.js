var nombre = 'Ali'
var apellido = 'Aguila'

var nombreMayusculas = nombre.toUpperCase()
var apellidoMinusculas = apellido.toLowerCase()
var primeraLetraNombre = nombre.charAt(0)
var cantidadDeLetrasNombre = nombre.length
var nombreCompleto = nombre + ' ' + apellido
var nombreCompletoNuevaSintaxis = `${nombre.toLowerCase()} ${apellido.toLowerCase()}`
var strCharCat = apellido.charAt(1) + apellido.charAt(2)
var strSimple = apellido.substr(1, 5) //Returns "guila" (start, lenght)//
var strSimpleTwo = apellido.substring(1, 5) //Returns "guil" (start, end)//