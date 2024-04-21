// Con una fat arrow function
const rest = (a, ...argumentos) => {
    console.log(a);
    console.log(argumentos);
}

// rest(1,2,3)

// Con un objeto
const obj = {
    a: 1, b: 2, c: 3, d: 4
}

// const {a, b, ...restobj} = obj
// console.log(a, b, restobj)

// Con un arreglo pirata
const arr = [1, 2, 3, 4, 5] 
// const [a, b, c, d, e, f, g] = arr
// console.log(a, b, c, d, e, f, g)
// Los ultimos elementos f y g seran undefined

// Obteniendo las dos primeras variables y en un arreglo el resto
const [a, b, ...r] = arr
// console.log(a, b, r)

// Ademas de valores se puden devolver funciones
const useState = () => ['valor', () => {}]
const [valor, setValor] = useState()
console.log(valor, setValor);
