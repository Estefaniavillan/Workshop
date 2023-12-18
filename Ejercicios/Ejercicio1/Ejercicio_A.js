// Eejercio 1.a
/*
  De un operario se conoce su sueldo y años de antigüedad. Se pide crear 
  un programa que lea los datos de entrada y muestre en consola el valor 
  booleano de las siguientes comparaciones:
  i. ¿El sueldo es inferior a $2000 US y su antigüedad es igual o 
  superior a 10 años?
  ii. ¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 
  años?
  iii. ¿El sueldo es mayor o igual a $2000 US?
*/
const sueldo = prompt("Por favor ingrese su sueldo");
const antiguedad = prompt("Por favor ingrese su antiguedad");

//Ejercio 1.a
const sueldoInferior2000 = Number(sueldo) < 2000; //F
const antiguedad10 = Number(antiguedad) == 10 || Number(antiguedad) > 10;
const ejercicioA = sueldoInferior2000 && antiguedad10;
console.log("respuesta 1.a ");
console.log(
  "¿El sueldo es inferior a $2000 US y su antigüedad es igual o superior a 10 años?",
  ejercicioA
);

// Ejercio 1.b
const antiguedadMenor10 = Number(antiguedad) < 10;
const ejercicioB = sueldoInferior2000 || antiguedadMenor10;
console.log("respuesta 1.b: ");
console.log(
  "¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 años?",
  ejercicioB
);

//Ejercicio 1.c
const ejercicioC = !sueldoInferior2000;
console.log("respuesta 1.c: ");
console.log("¿El sueldo es mayor o igual a $2000 US?", ejercicioC);
