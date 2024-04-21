const fn = (a,b,c) => console.log(a , b , c)
const arr = [1,2,3,4]

fn (...arr)

const arr1 = [5, 6]
// Haciendo copias de arreglos
const arr2 = [...arr, 2, 3]
const arr3 = arr
// Al hacer esto se modificará arr3 y arr
arr[0] = 'chanchito feliz'

console.log(arr, arr2, arr3)