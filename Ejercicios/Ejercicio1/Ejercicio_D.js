// Diseñe un algoritmo que lea o reciba el nombre de un empleado, su salario 
// básico por horas y el número de horas trabajadas en un mes y realice lo 
// siguiente:
// i. Calcular su salario básico mensual
// ii. Determinar si recibe o no subsidio de transportes. Un empleado 
// recibe este subsidio cuando el salario mensual básico es menor o 
// igual a $700.000 COP
// iii. Mostrar en consola el nombre del empleado, su salario básico 
// mensual y si recibe o no subsidio de transporte.

const nombreEmpleado = prompt("Por favor, ingrese el nombre del empleado");
const salarioBasico = prompt("Por favor, ingrese el salario básico por horas");
const horasTrabajadasMes = prompt("Ingrese el número de horas trabajadas en un mes");

// i. Calcular su salario básico mensual
const salarioBasicoMensual = Number(salarioBasico) * Number(horasTrabajadasMes);

// ii. Determinar si recibe o no subsidio de transportes. Un empleado 
// recibe este subsidio cuando el salario mensual básico es menor o 
// igual a $700.000 COP
const subsidioTransporte = Number(salarioBasicoMensual) < 700000 || Number(salarioBasicoMensual) == 700000;

// iii. Mostrar en consola el nombre del empleado, su salario básico 
// mensual y si recibe o no subsidio de transporte.
console.log("Ejercicio 1 d");
console.log("Nombre del empleado: ", nombreEmpleado);
console.log("Salario básico mensual: ", salarioBasicoMensual);
console.log("¿Recibe subsidio de transporte?", subsidioTransporte);