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
// if (10 == 10){
//     console.log('You got a true!')
//  } else {
//     console.log('You got a false!')
//  };

//  ejercicio 2
// Dada una constante que contiene la nota de un examen que va de 0 a 10
// Si es mayor que cinco mostrar el texto «Aprobado».
// Si es igual a cinco, mostrar el texto «Aprobado por los pelos»
// Si es menor que cinco, mostrar el texto «Suspenso».
// const nota = 2;
// if (nota > 5) console.log("Aprobado");
//   else if(nota === 5) console.log("Aprobado por los pelos");
// else{
//   console.log("Suspenso");
// };

// ejercicio 3
// Declara una constante ‘i’ de tipo entero y asígnale un valor. Mostrar un mensaje indicando si el valor de ‘i’ es positivo o negativo, si es par o impar, si es múltiplo de 5, si es múltiplo de 10 y si es mayor o menor que 100. Consideraremos el 0 como positivo.
// const i = 0;

// if (i < 0) {
//   console.log(`${i} es negativo`);
// }
// else if (i >0){
//   console.log(`${i} es positivo`);
// }
// else{
//     console.log(`${i} es cero`);
//   };

// if(i%2 === 0){
//   console.log(`${i} es par`);
// }
// else{
//   console.log(`${i} es impar`);
// }

// if(i%5 === 0){
//   console.log(`${i} es multiplo de 5`);
// }else{
//   console.log(`${i} no es multiplo de 5`);
// };

// if(i%10 === 0){
//   console.log(`${i} es es multiplo de 10`);
// }else{
//   console.log(`${i} no es multiplo de 10`)};

// if(i >= 100){
//   console.log(`${i} es mayor o igual que 100`);
// }else{
//   console.log(`${i} no es mayor o igual que 100`)
// };


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

// const n1 = 3;
// const n2 = 6;
// const op = "";

// if(op === "+"){
//   console.log(n1 + n2);
// }else if (op === "-"){
//   console.log(n1 - n2)
// }else if (op === "*"){
//   console.log(n1 * n2);
// }else if (op === "/"){
//   console.log(n1 / n2)}
//   else{console.log("No has introducido un operador valido");}


// Ejercicios operador ternario
// Declare una constante numérica ‘b’ y asignale un valor. Mostrar una traza indicando si el valor de ‘b’ es positivo o negativo. Consideraremos el 0 como positivo. Utiliza el operador condicional (? : ) dentro del console.log para resolverlo.
// const b = 0;
// console.log(b >=0 ? `${b} es positivo` : b + " es negativo");

// ejercicio 2 operador ternario
// Declarar una constante numérica ‘i’ y asignale un valor. Muestra un mensaje indicando si ‘i’ es par o impar. Utiliza el operador condicional ( ? : ) dentro del console.log para resolverlo.
// const i = 2;
// console.log(i%2 === 0 ? i + ' es par' : i + ' es impar')
// console.log(i%2 === 0 ? `${i} es par` : `${i} es impar`)

// ejercicio switch 1
// Inserta el código necesario para que esta estructura de control Switch funcione también con el amarillo.
// const color = 'amarillo';
// switch(color) {
// 	case 'rojo':
// 		console.log('Has escogido rojo');
// 	break;
// 	case 'azul':
// 		console.log('Has escogido azul');
// 	break;
// 	//Inserta tu código aquí
//   case 'amarillo':
//     console.log('Has escogido amarillo');
//   break;
// 	default:
// 		console.log('No has escogido ningún color de la lista!');
// }

// ejercicio 2 switch
// Añadir el caso por defecto (default):
// const golosina = 'nubes';
// switch(golosina) {
// 	case 'chicle':
// 		console.log('Has escogido un chicle');
// 	break;
// 	case 'gominola':
// 		console.log('Has escogido una gominola');
// 	break;
// 	case 'regaliz':
// 		console.log('Has escogido un regaliz');
// 	break;
// 		//Inserta tu código aquí
//   default:
//     console.log('No has escogido una gominola autorizada');
// }

// bucles for ejercicio 1
// Imprimir los números pares que hay dentro de los 100 primeros números enteros. No utilizar la estructura de control if para resolver este ejercicio.
// for (let i=0; i <=100; i+=2){
//   console.log(i);
// };

// bucles for ejercicio 2 - pares
// Imprimir los números pares que hay dentro de los 100 primeros números enteros.
// El bucle avanzará de uno en uno; no de dos en dos como en el ejercicio anterior.
// Utilizaremos el operador % para separar los pares de los impares.
// Nota: El operador «%» nos da el resto de dividir un número entre otro.
// for (let n=0; n <= 100; n++){
//   if(n%2 === 0) console.log(n)
//   };

// bucles for ejercicio 3 - fizzbuzz
// Imprimir los números del 1 al 20.
// Para números divisibles por 3, imprimir “Fizz”.
// Para números divisibles por 5, imprimir “Buzz”.
// Para números divisibles por 3 y 5, imprimir “FizzBuzz”.
// En cualquier otro caso, imprimir el número.
// for (let f = 1;f <=20;f++){
//   if (f%3 === 0 && f%5 === 0){
//     console.log("FizzBuzz");
//   }else if(f%3 === 0){
//     console.log("Fizz");
//   }else if (f%5 === 0){
//     console.log("Buzz");
//   }else{
//     console.log(f);
//   }
// }

// bucles for ejercicio 4 
// Suma los números del 5 al 0 (inclusive), en orden descendente usando un bucle de tipo for.
// let suma=0;
// for (let s=5;s >0;s--){
//   console.log(suma=suma + s);
// }
// console.log(suma);

// bucles for ejercicio 5 - tabla del 7
//  Utilizando el bucle for, mostrar la tabla de multiplicar del número 7.
// for (let t=1; t <= 10; t++){
//   console.log(`7 * ${t} = ${7 * t}`);
//   console.log("7 * " + t + " = " + (7 * t));
// };

// bucles for ejercicio 5 - tabla de multiplicar
// Mostrar la tabla de multiplicar que va del 1 al 9. Usaremos dos bucles anidados.
// Paso para resolver el ejercicio:
// 1. Utilizando un bucle for, hacer la tabla de multiplicar del número 1.
// 2. Anidar la tabla de multiplicar hecha en el paso anterior, dentro de otro bucle for, que muestre las tablas de multiplicar de los números que van del 1 al 10.
// for (let m=1;m <=10; m++){
//   for(let p=1;p <=10;p++){
//     // console.log(`${m} * ${p} = ${m * p} `);
//     console.log(m +  "* " + p + " = " + (m*p))
//   }
// }

// bucle while ejercicio 1 - sumar numeros del 5 al 0
// let suma=0;
// let i=0;
// while (i <=5){
//   suma=suma+i;
//   i++;
// };
// console.log(suma);

// ejercicios leccion 6 - 1
// Haz un código equivalente al siguiente utilizando el operador unario de suma (++).
// let myVar = 87;
// // myVar = myVar + 1; // Modificar esta línea
// myVar++;
// console.log(myVar); // 88

// ejercicios leccion 6 - 2
// Haz un código equivalente al siguiente utilizando el operador unario de resta (- -);
// let myVar2 = 11;
// // myVar2= myVar2 - 1; // Modificar esta línea
// myVar2--;
// console.log(myVar2); // 10

// ejemplo do while
// let random= Math.random();
// // while (random < 0.5){
// //   console.log(random);
// //   random=Math.random();
// // };
// do{
//   random=Math.random();
//   console.log(random);
// } while (random < 0.5);







