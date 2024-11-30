// ejercicio 1
// Crea un array con cinco nombres de persona y recórrelo con un bucle for mostrando el texto «Conozco a alguien llamado «.
// array1 = ['pepe','jose','pep','josep','bepo'];
// for(let Element of array1){
//   console.log(`Conozco a alguien llamado ${Element}`); 
// };

// ejercicio 2
// Crea una función toArray que reciba dos valores y devuelva un array con estos dos valores.
// Por ejemplo, la llamada:
// toArray(5,9);
// debería devolver el array [5, 9]
// const toArray = (elem1, elem2) => [elem1, elem2];
// const array2 = toArray(5,9);;
// console.log(array2);

// ejercicio 3
// Recorrer la siguiente lista con un bucle imprimiendo el doble de cada número:
// const numbers = [1,9,3,8,5,7];
// for(let i=0; i < numbers.length; i++){
//   console.log(numbers[i] * 2);
// };

// ejercicio 4
// Escribe una función llamada getFirstElement que reciba un array y devuelva el primer elemento.
// Por ejemplo:
// getFirstElement([1, 2]);
// debería devolver 1.
// const getFirstElement = (array) => array[0];
// console.log(getFirstElement([5,9,7,5,3]));

// ejercicio 5
// Escribe una función llamada setFirstElement que reciba como parámetro de entrada un array y un valor cualquiera. El valor recibido debería reemplazar lo que haya en la primera posición del array. El array debería ser devuelto.
// Ejemplo:
// setFirstElement([1, 2], 3);
// debería devolver [3, 2]
// const setFirstElement = (array, valor) => {
//    array[0] = valor;
//    return array;
// };
// const oldArr = [1,2,3,4];
// const newArr = setFirstElement(oldArr, 99);
// console.log(newArr); 

// ejercicio 6
// Escribe una función getLastElement que reciba un array como parámetro de entrada y devuelva el último elemento del array.
// Por ejemplo:
// getLastElement([1, 2]);
// debería devolver 2.
// const getLastElement = (array) => array[array.length -1];
// console.log(getLastElement([1, 2]));

// ejercicio 7
//  Contar el número de elementos positivos, negativos y que valgan cero en un array de 10 enteros. Los valores habrán sido harcodeados en un array. La salida por consola debería ser similar a esta:
// // Array con valores harcodeados: [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
// Cantidad de positivos:  6
// Cantidad de negativos:  3
// Cantidad de ceros:  1
// const array7 = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
// let positivos = 0;
// let negativos = 0;
// let ceros = 0;
// for(let Element of array7){
//   if(Element < 0){
//     negativos++
//   }else if(Element === 0){
//     ceros++
//   }else positivos++
// };
// console.log(`Cantidad de positivos: ${positivos}`);
// console.log(`Cantidad de negativos: ${negativos}`);
// console.log(`Cantidad de ceros: ${ceros}`);

// ejercicio 8
// Leer 10 enteros harcodeados en un array y mostrar la media de los valores negativos y la de los positivos.
// const array8 = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
// let positivos8 = 0;
// let contp8 = 0;
// let negativos8 = 0;
// let contn8 = 0;
// for(let i = 0; i < array8.length; i++){
//   if(array8[i] < 0){
//     negativos8+= array8[i];
//     contn8++;
//   }else if(array8[i] === 0){
//   }else {
//     positivos8+= array8[i];
//     contp8++;
//   }
// };
// console.log(`Media negativos: ${negativos8 / contn8}`);
// console.log(`Media positivos: ${positivos8 / contp8}`);


// ejercicio 9
// Selecciona un elemento del array arr de tal forma que una variable que debes declarar llamada myData sea igual a 8.
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14]
// ];
// const myData = arr[2][1]; // Modificar únicamente esta línea para acceder al 8 del array bidimensional
// console.log(myData);

// ejercicio factorial
// Dado un número, calcula su factorial.
const factorial = (fact) => {
  let resultTotal = fact;
  if(fact === 0){
    return 1;
  }else {
  for(let i=fact -1; i > 1; i--){
    resultTotal = resultTotal * i; 
  };
  return resultTotal;
  }
};
console.log(factorial(0));   


// ejercicio 1 foreach
// Crear un array con cinco nombres de persona y recórrelo mostrando el texto «Conozco a alguien llamado «.
// array1 = ['pepe','jose','pep','josep','bepo'];
// array1.forEach(element => console.log("Conozco a alguien llamado " + element));

// ejercicio 2 foreach
// Recorrer la siguiente lista con un bucle foreach imprimiendo el doble de cada número:
// const numbers2 = [1,9,3,8,5,7];
// numbers2.forEach(element => console.log(element * 2));

// ejercicio 3 foreach
// Contar el número de elementos positivos, negativos y que valgan cero en un array de 10 enteros. Los valores habrán sido harcodeados en un array. La salida por consola debería ser similar a esta:
// Array con valores harcodeados: [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
// Cantidad de positivos:  6
// Cantidad de negativos:  3
// Cantidad de ceros:  1
// const array3 = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
// let pos3 = 0;
// let neg3 = 0;
// let cer3 = 0;
// array3.forEach(elemento => {
//   if(elemento < 0) {
//     neg3++;
//   }else if(elemento > 0){
//     pos3++;
//   }else cer3++;
// } );
// console.log(`Cantidad de positivos: ${pos3}`);
// console.log(`Cantidad de negativos: ${neg3}`);
// console.log(`Cantidad de ceros: ${cer3}`);

// ejercicio 4
//  Leer los 10 enteros del siguiente array y mostrar la media de los valores negativos y la de los positivos.
// const array4 = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
// let pos4 = 0;
// let neg4 = 0;
// let contp4 = 0;
// let contn4 = 0;
// array4.forEach(elemento => {
//   if(elemento > 0){
//     pos4+=elemento;
//     contp4++;
//   }else if(elemento === 0) {
//   } else {
//     neg4+=elemento;
//     contn4++;
//   }
// });
// console.log(`Media de positivos ${pos4 / contp4}`);
// console.log(`Media de negativos ${neg4 / contn4}`);

// 3 en raya
// variables
<script>
  const board = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
  const printBoard = () => {
    alert(
      board[0] +
        "|" +
        board[1] +
        "|" +
        board[2] +
        "\n" +
        board[3] +
        "|" +
        board[4] +
        "|" +
        board[5] +
        "\n" +
        board[6] +
        "|" +
        board[7] +
        "|" +
        board[8]
    );
  };
  const evaluateWin = () => {
    if (board[0] === board[1] && board[0] === board[2] && board[0] !== "_") {
      return true;
    } else if (
      board[3] === board[4] &&
      board[3] === board[5] &&
      board[3] !== "_"
    ) {
      return true;
    } else if (
      board[6] === board[7] &&
      board[6] === board[8] &&
      board[6] !== "_"
    ) {
      return true;
    } else if (
      board[0] === board[3] &&
      board[0] === board[6] &&
      board[0] !== "_"
    ) {
      return true;
    } else if (
      board[1] === board[4] &&
      board[1] === board[7] &&
      board[1] !== "_"
    ) {
      return true;
    } else if (
      board[2] === board[5] &&
      board[2] === board[8] &&
      board[2] !== "_"
    ) {
      return true;
    } else if (
      board[0] === board[4] &&
      board[0] === board[8] &&
      board[0] !== "_"
    ) {
      return true;
    } else if (
      board[2] === board[4] &&
      board[2] === board[6] &&
      board[2] !== "_"
    ) {
      return true;
    } else {
      return false;
    }
  };
  printBoard();
  let haGanadoAlguien = false;
  let isPlayer1 = true;
  while (haGanadoAlguien === false) {
    const position = prompt("Enter a position from 0 to 8");
    const ficha = isPlayer1 ? "X" : "O";
    board[position] = ficha;
    haGanadoAlguien = evaluateWin();
    if (haGanadoAlguien) {
      alert("Enhorabuena player " + ficha);
    } else {
      isPlayer1 = !isPlayer1;
      printBoard();
    }
  }
</script>







