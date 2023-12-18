// Crear una fórmula para saber si un número es o no es un múltiplo de 2

const numero= prompt("Ingresa un número para determinar si es múltiplo de 2")

const multiplo2 = Number(numero)%2 == 0;

console.log("¿Es múltiplo de 2? ", multiplo2)