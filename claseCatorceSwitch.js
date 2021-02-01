var signo = prompt('Cual es tu signo?')

switch (signo) {
    case 'acuario':
        console.log('tendrás suerte en el amor')
        break
    case 'virgo':
        console.log('tendrás suerte en el dinero')
        break
    case 'picis':
        console.log('tendrás suerte en el salud')
        break
    case 'leo':
        console.log('tendrás suerte en el amistades')
        break
    case 'cancer':
    case 'cáncer':
        console.log('tendrás suerte en el negocios')
        break
    case 'geminis':
    case 'géminis':
        console.log('tendrás suerte en el viajes')
        break
    default:
        console.log('No es un signo zodiacal valido')
        break
}