const url = 'https://jsonplaceholder.typicode.com/users'

/** Recibe dos argumentos, la URL obligatoria y la segunda opcional
 * La respuesta debe ser procesada, puede usarse la que viene en formato 
 * de texto o en json
 * Los objetos retornan una promesa, que se debe procesar
 *  */ 

/** Sin especificar el segundo argumento, se hace una peticion GET
 * Para hacer una peticion con otro metodo es necesario especificar 2do arg
 * 
 * POST se usa para crear recursos en una API REST
 * Para darle mas indicaciones al servidor se deben especificar headers
 * La propiedad body contiene los datos que le enviare al servidor, en formato string
 *  */
    

// fetch(url, {
//     method: 'POST', // GET, POST, PUT, PATCH, DELETE, ...
//     headers: {
//         'Content-type': 'application/json',
//         'Authorization': 'Bearer unTokenDeAutorizacion'
//     },
//     body: JSON.stringify({
//         name: 'Chanchito feliz',
//         website: 'google.com'
//     })
// })
//     .then((response) => response.json())
//     .then(data => console.log(data))

/** Abriendo la consola del navegador, en la seccion Network se puede ver 
 *  el detalle de la peticion, status, headers, etc
 *  */ 


/**
 * Usando una funcion async
 * 
 * Se debe agregar "await" antes del metodo fetch y de la respuesta "response"
 * 
 * La mayor parte del tiempo en aplicaciones reales se usaran "async await"
 * Es codigo imperativo
 * 
 * La API de promesas es mas avanzado y es recomendable para aplicaciones mas complejas
 */

const fn = async() => {
    const response = await fetch(url, {
        method: 'POST', // GET, POST, PUT, PATCH, DELETE, ...
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer unTokenDeAutorizacion'
        },
        body: JSON.stringify({
            name: 'Chanchito feliz',
            website: 'google.com'
        })
    })

    // Presentar la data
    const data = await response.json()
    console.log(data)
}

fn()
