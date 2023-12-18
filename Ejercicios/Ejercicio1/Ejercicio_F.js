const numeroPasaporte = prompt("Por favor ingrese la inicial en mayuscula del pasaporte");
function esNacional(numeroPasaporte) {
  return numeroPasaporte.charAt(0) === 'A';
}
console.log("¿Es nacional? ", esNacional(numeroPasaporte));
