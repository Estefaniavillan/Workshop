

function esNacional(numeroPasaporte) {
    return numeroPasaporte.charAt(0) === 'A';
  }
  
  const pasaporte1 = 'A12345';
  console.log(esNacional (pasaporte1));
  
  const pasaporte2 = 'B67890';
  console.log(esNacional(pasaporte2));
  