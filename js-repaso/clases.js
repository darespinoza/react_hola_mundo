
// ________________ HOISTING
// console.log(Rectangulo)
class Rectangulo{
}

// console.log(Cuadrado)
function Cuadrado(){
}

// console.log(Cuadrado, Rectangulo)
const r = new Rectangulo()

// ________________ Propiedades, metodos de clase
class Chancho{
    propiedad = 'mi propiedad'
    #hambre
    static estatico = 42

    constructor (estado='feliz', hambre = false){
        this.propiedad = estado
        this.#hambre = hambre
    }

    hablar(){
        console.log(`soy un chancho ${this.propiedad} ${this.#hambre ? 'con mucha hambre!' : 'satisfecho'}`)
    }

    static comer(){
        console.log(this.estatico, 'estoy comiendo!')
    }
}

const feliz = new Chancho('feliz')
console.log(feliz)
const traste = new Chancho('traste')
console.log(traste.__proto__)
const nose = new Chancho()
console.log(nose.__proto__.hablar)

// En node, no se muestran los metodos de la clase al llamar al prototipo
// En vanilla JS si se pueden ver las funciones al acceder solo al __proto__

Chancho.comer()

// Los métodos estáticos no pueden acceder a clases o variables a menos que sean static
