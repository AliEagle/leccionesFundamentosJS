const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'


const OPTS = { crossDomain: true }

function obtenerPersonaje(id) {

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, OPTS, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))

    })

}


function onError(id) {
    console.log(`Sucediñio un error al obtener personaje ${id}`)
}

obtenerPersonaje(1)
    .then(personaje => {
        console.log(`El personaje es ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then(personaje => {
        console.log(`El personaje es ${personaje.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje => {
        console.log(`El personaje es ${personaje.name}`)
        return obtenerPersonaje(4)
    })
    .catch(onError)
