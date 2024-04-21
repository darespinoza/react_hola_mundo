// Evaluando elementos con filter
const arr = [5, 1, 2, 3, 4, -5];

// Iterar y obtener todos los elementos que cumplan la condicion
// Mostrando el indice, que es un argumento oculto
// const r = arr.filter((el, i) => {
//     console.log(i);
//     return el < 2;
// })
// console.log (r)

// Manipulando elementos con map
const mapped = arr.map((el) => `<h1>${el}</h1>`);
// console.log(mapped)

const users = [
    {id: 1 , name: 'Chanchito feliz'},
    {id: 2 , name: 'Chanchito traste'},
    {id: 3 , name: 'Chanchito enrabiao'},
    {id: 4 , name: 'Chanchito tucaso'},
];

const mappped2 = users.map((user) => `<h1>${user.name}</h1>`)
// console.log(mappped2)

// Manipulando elementos con reduce
// Reduce recibe una funcion con dos parametros: acumulador y elemento iterante
// Tambien tiene argumentos index y array que no son muy usados
// const r1 = arr.reduce((acc, el) => acc + el, 0);

const getMax = (a, b) => Math.max(a, b)
// Se debe tener cuidado cuando se usa el elemento iterante
const r1 = arr.reduce(getMax, 0)
// console.log (r1);

// Obtener todos los nombres de usuarios como un string
// Si el acumulador acc es vacio devolver un string vacio, caso contrario un template string con el acumulador y una coma
const r2 = users.reduce((acc, el) => 
    // `${acc}, ${el.name}`, '')
    `${acc === '' ? '' : `${acc}, `} ${el.name}`, '')
// console.log(r2)


// Usando reduce con map y filter
// Usuarios con id mayor a 2
const r3 = users.reduce((acc, el) => {
    if (el.id < 2){
        return acc
    }
    return acc.concat(el)
}, [])
console.log(r3)
// [
//     { id: 2, name: 'Chanchito traste' },
//     { id: 3, name: 'Chanchito enrabiao' },
//     { id: 4, name: 'Chanchito tucaso' }
//   ]