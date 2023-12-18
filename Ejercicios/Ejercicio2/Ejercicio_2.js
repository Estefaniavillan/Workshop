// . Considerando que 𝑎 = 4, 𝑏 = 7, 𝑐 = 2𝑏, 𝑥 = 𝑎 , 𝑦 = 3𝑥, 𝑢 = 6, 𝑤 = 10; crear 
// un algoritmo con JavaScript que realice y muestre el resultado en consola de las 
// siguientes operaciones algebraica:
// a. a/(b*c)
// b. a^2 + b^92
// c. (x+y)/ (u +(z +w ))
// d. (x+y) * (z+ w)

let a = 4;
let b = 7;
let c = 2 * b;
let x = a;
let y = 3 * x;
let u = 6;
let w = 10;
let z = 5; //se le proporciona un valor puesto que no lo tiene en el ejercicio

// a.
let resultadoA = a/ (b* c)
console.log("Resultado a:", resultadoA);

// b. 
let resultadoB =Math.pow(a, 2) + Math.pow(b, 92);
console.log("Resultado b:", resultadoB);

//  c.
let resultadoC = (x + y) / (u +(w/a));
console.log("Resultado c:", resultadoC);

// d. 
let resultadoD = (x / y) * (z + w);
console.log("Resultado d:", resultadoD);
