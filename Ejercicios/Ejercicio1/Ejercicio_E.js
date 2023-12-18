// Hacer un algoritmo con JavaScript que reciba cualquier letra del 
// abecedario y muestre en consola el valor booleano que indique si es o no 
// una vocal.

const letra = prompt("Ingrese una letra").toLocaleLowerCase(); //convertir la letra del usuario a minúscula

const vocales =["a","e","i","o","u"];
const esVocal = vocales.includes(letra); //averiguar si la letra ingresada está en el array

console.log("Ejercicio 1 e");
console.log("¿Es una vocal?", esVocal);