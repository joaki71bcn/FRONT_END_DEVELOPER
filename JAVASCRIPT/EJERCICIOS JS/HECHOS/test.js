/* 
'use strict'
//  ejercicio 1 - Declara una variable de tipo entero, asígnale un valor y muéstralo por consola
let numero = 3;
console.log(numero);
// ejercicio 2  Declara una variable de tipo texto, asígnale un valor y muéstralo por consola.
let letra ="a";
console.log(letra);
// ejercicio 3 Asigna el valor de la variable a a la variable b.
let a;
a = 7;
let b = a;
console.log(b);
// ejercicio 4 Modifica las siguientes declaraciones de variables para que sean camelCase
// let TituloDeLaPelicula;
// let camelCaseBienPuesto;
// let EDaddelMonstruo;
let tituloDeLaPelicula;
let camelCaseBienPuesto;
let edaddElMonstruo;
// ejercicio 5 ¿Cuanto valor tendrá i después de ejecutar el siguiente código?
let i = 7;
i = 5;
i = 3;
console.log(i); // ¿Qué valor se mostrará por consola?
// ejercicio 6 Intercambiar el contenido de dos variables
let a2 = 5;
let b2 = 7;
// ... aquí y sólo aquí añadiremos las líneas de codigo
let c = a2;
a2 = b2;
b2 = c;
console.log('a: ', a2); //Debería mostrar 7
console.log('b: ', b2); //Debería mostrar 5 */

/* NUEVO CIERRE GLOBAL

/* ejercicio 1 -
1. Declara una constante llamada txt1 que contenga el texto «Este es el principio».
2. Declara otra constante llamada txt2 que contenga el texto «Este es el final».
3. Declara otra constante llamada txt3 que contenga la concatenación de ambas cadenas, colocando un espacio en blanco entre medias.
4. Muestra en un console.log el resultado de la concatenación. */

const txt1 = "Este es el principio";
const txt2 = "Este es el final";
const txt3 = txt1 + ' ' + txt2;
console.log(txt3);

/* ejercicio 2
Hacer un conversor de euros a dólares. Tendremos una constante llamada euros en la que el valor estará inicializado con valor 7. Debemos calcular ese valor en dólares. Supondremos que un euro son dos dólares. */
const euros = 7;
const dolares = euros * 2;// Modificar sólo esta línea
console.log(dolares); // Debería mostrar 14

/* ejercicio 3
El IVA para ciertos artículos es del 21%. Realiza un programa que a partir de una constante precio inicializada con valor 100, calcule el precio con IVA. */
const precio = 100;
const precioConIva = (precio * 21 / 100) + precio;// Modificar sólo esta línea
console.log(precioConIva); // Debería mostrar 121

/* ejercicio 4
Realiza un programa que a partir de los valores constantes, ancho=4 y alto=7, calcule el área de un rectángulo. Recuerda que el area de un rectángulo es ancho por alto */
const ancho = 4;
const alto = 7;
console.log(`El area del rectangulo es ${ancho * alto }`);

/* ejercicio 5
Hacer un conversor de grados centígrados a grados Fahrenheit. Para ello deberé multiplicar los grados centígrados por 9/5 y sumar 32. Para comprobar que hemos hecho los cálculos correctamente, partiremos de una constante llamada centigrados que valdrá 20. En este caso, los grados fahrenheit deberían ser 68. */
const centigrados = 20;
const fahrenheit = centigrados * 9/5 +32// Modificar sólo esta línea
console.log(fahrenheit); // Debería mostrar 68
/* 
ejercicio 6
Vamos a mandar al usuario la caja de sus sueños. Para ello, partiremos de los siguientes valores: */
const nombre = 'Juan';
const material = 'madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza estraña, indómita';
/* y los concatenaremos para obtener por consola el siguiente mensaje:
«[nombre] ha pedido una caja de [material] con unas dimensiones [dimensiones]. [comentario].

El anterior mensaje, una vez montado, debería haber quedado así:

Juan ha pedido una caja de Madera con unas dimensiones diminutas. Que sea muy bonita, pero de una belleza extraña, indómita. */
console.log(`${nombre} ha pedido una caja de ${material} con unas dimensiones ${dimensiones}. ${comentario}`);










