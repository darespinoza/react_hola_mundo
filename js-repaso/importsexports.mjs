const chanchitosFelices = ['chancho 1', 'chancho 2', 'chancho 3']
const chanchitosTristes = ['triste 1', 'triste 2']
// Para exportar al momento de declarar usar la palabra reservada
// export const otrosChanchitos = []
const otrosChanchitos = []

const fn1 = () => {
    console.log('soy la funcion')
}

function fn2(){
    console.log('soy la funcion 2')
}

// Formas de exportar luego de declarar
export {chanchitosTristes, otrosChanchitos, fn1, fn2}
export default chanchitosFelices