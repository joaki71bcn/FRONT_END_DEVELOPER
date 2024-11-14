'use strict'

// Modificar SÓLO EL OPERADOR BOOLEANO para lograr que se imprima el mensaje.
// const dato1 = 10;
// const dato2 = 10;
// if(dato1 === dato2){
// 	console.log('exito');
// }

// ejercicio 1 - Corrige los errores que hay en este código:
// if {10 == 10}(
//     console.log('You got a true!')
// ) else (
//     console.log('You got a false!')
// )
if (10 == 10){
    console.log('You got a true!')
 } else {
    console.log('You got a false!')
 };

//  ejercicio 2
// Dada una constante que contiene la nota de un examen que va de 0 a 10
// Si es mayor que cinco mostrar el texto «Aprobado».
// Si es igual a cinco, mostrar el texto «Aprobado por los pelos»
// Si es menor que cinco, mostrar el texto «Suspenso».
const nota = 2;
if (nota > 5) console.log("Aprobado");
  else if(nota === 5) console.log("Aprobado por los pelos");
else{
  console.log("Suspenso");
};

// ejercicio 3
// Declara una constante ‘i’ de tipo entero y asígnale un valor. Mostrar un mensaje indicando si el valor de ‘i’ es positivo o negativo, si es par o impar, si es múltiplo de 5, si es múltiplo de 10 y si es mayor o menor que 100. Consideraremos el 0 como positivo.
const i = 0;

if (i < 0) {
  console.log(`${i} es negativo`);
}
else if (i >0){
  console.log(`${i} es positivo`);
}
else{
    console.log(`${i} es cero`);
  };

if(i%2 === 0){
  console.log(`${i} es par`);
}
else{
  console.log(`${i} es impar`);
}

if(i%5 === 0){
  console.log(`${i} es multiplo de 5`);
}else{
  console.log(`${i} no es multiplo de 5`);
};

if(i%10 === 0){
  console.log(`${i} es es multiplo de 10`);
}else{
  console.log(`${i} no es multiplo de 10`)};

if(i >= 100){
  console.log(`${i} es mayor o igual que 100`);
}else{
  console.log(`${i} no es mayor o igual que 100`)
};


// ejercicio 4
// Hacer una calculadora que determine la operación a realizar por medio de una estructura de control if.
// La calculadora utilizará 3 constantes para hacer los cálculos.
// Una constante que almacenará el primer número. Por ejemplo:
// const n1 = 3;
// Una constante que almacenará el segundo número. Por ejemplo:
// const n2 = 7;
// Una constante de tipo texto que almacenará la operación a realizar. Esta constante podrá valer +, -, * o /, en función de la operación que deseamos realizar. Por ejemplo:
// const op = '+';
// Utilizaremos la estructura de control if para evaluar la constante que almacena la operación a realizar y en función de esa evaluación, hacer una suma, una resta, una multiplicación o una división.

const n1 = 3;
const n2 = 6;
const op = "";

if(op === "+"){
  console.log(n1 + n2);
}else if (op === "-"){
  console.log(n1 - n2)
}else if (op === "*"){
  console.log(n1 * n2);
}else if (op === "/"){
  console.log(n1 / n2)}
  else{console.log("No has introducido un operador valido");}


// Ejercicios operador ternario
// Declare una constante numérica ‘b’ y asignale un valor. Mostrar una traza indicando si el valor de ‘b’ es positivo o negativo. Consideraremos el 0 como positivo. Utiliza el operador condicional (? : ) dentro del console.log para resolverlo.
const b = 7;
console.log(b > 0 ? `${b} es positivo` : b + " es negativo");