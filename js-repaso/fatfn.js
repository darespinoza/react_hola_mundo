/**
 * JS es multiparadigmas, implementa herencia basada en prototipos
 * 
 * Al usar las Fatfunctions Fn se pueden usar como una especie de clases
 * 
 */

// function Fn(){
//     return 'Chanchito feliz'
// }
// const r = Fn()
// console.log(r)

/**
 * 
 * Al usar la palabra reservada new, se crea una instancia.
 * 
 * Las funciones declaradas con "function" tienen un contexto de "this".
 * Al declarar crear una instancia con la palabra reservada new ocurren varias cosas:
 * 1. Se crea un objeto del aire
 * {}
 * 
 * 2. El objeto toma las propiedades asignadas con this
 * {prop: propiedad}
 * 
 * 3. Ignora el return
 * 4. Se le asigna el prototipo de las funciones
 * __proto__
 * 
 * 
 * Las declaraciones con la palabra reservada function, sirven:
 * 1. Como funciones
 * 2. Como clases basadas en prototipos. Herencia basada en prototipos. Tienen contexto 'this'
 */

function Fn(){
    this.prop = 'propiedad'
    // return 'Chanchito feliz'
    // Ignorado
}

// Fn.prototype.lala = function (){}
// { lala: [Function (anonymous)] }

Fn.prototype.lala = function PrototipoDeFuncion (){}
// { lala: [Function: PrototipoDeFuncion] }


const r = new Fn()
// console.log(r.__proto__)

// Una fat arrow function no puede ser llamada con la palabra new, solo las funciones declaradas con function
// Las funciones declaradas con function, tienen un contexto de this y pueden ser usadas como clases

const fatFN = () => {
    // const obj = {}
    // obj.prop = 'propiedad'
    this.prop = 'lala'
}

const r1 = fatFN()
console.log(this)

// const r1 = new fatFN()


// console.log(r1)


// Las Fat Arrow Function tienen un return implicito, al no usar llaves