console.log(miVariable)
var miVariable = "algo"
console.log(miVariable)
/**
 * Al declarar con var, el compilador primero crea la variable y luego le asigna el valor
 * var miVariable
 * miVariable = "algo"
 * 
 * Si hago un console.log antes de la declaración en el codigo devolverá "undefinded"
 * Cuando se declara con var, JS lleva SIEMPRE la declaracion al comienzo del archivo
 * 
 * NO ES RECOMENDABLE!
 */


let otraVariable = "algo mas"
/**
 * Al declarar con let, la variable se inicializa en la misma linea donde se declara
 * 
 * Si se quiere acceder a la variable, ocurrirá un error por no inicializar la variable
 */

const miConstante = "valor constante"
/**
 * Las constantes no pueden ser modificadas
 */