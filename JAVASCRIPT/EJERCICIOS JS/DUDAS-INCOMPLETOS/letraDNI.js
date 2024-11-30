// Crear una función que reciba un parámetro, un dni, y devuelva la letra del mismo. Si el DNI pasado tiene algún error devolverá “”.
// El algoritmo para calcular la letra del dni es el siguiente :
// • El texto introducido debe tener 8 dígitos y debe ser un número.
// • Debemos calcular el resto de la división entera entre el número y el número 23.
// • Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)


const calcDni = () => {
  //variables de la funcion
  let numLetter="";
  let arrayLetter=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
  console.log(arrayLetter);

  // asigno variables a los elemenos DOM
  const out = document.querySelector('output');
  const dni = document.querySelector('#dni').value;

  //validacion
  if(dni.length !== 8 || typeof(Number(dni) === 'NaN')){
    console.log(dni.length , typeof(Number(dni)));
    alert("has de introducir 8 digitos numericos ");
    // return ""; no hace falta ya que no retornamos nada
  }else{
    numLetter = Number(dni)%23;
    out.value = arrayLetter[numLetter];
  };

};
document.querySelector('button').addEventListener('click', calcDni);

// pablo: en ejercicio dni el enunciado del video y el enunciado del ejercicio son ligeramente diferentes por lo que la resolucion es diferente