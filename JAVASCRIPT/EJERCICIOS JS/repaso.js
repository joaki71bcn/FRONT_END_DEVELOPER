// ejercicio 1 repaso
// El usuario debe introducir dos números y un operador y visualizar por consola el resultado de la operación. Las operaciones serán +, -, *, /.
// Pasos para resolver el ejercicio:
// 1. Recogida de datos: numero1, numero2, operador. Los datos que recogemos de un prompt siempre serán texto, así que si queremos utilizar números, utilizaremos:
// const n = Number(prompt('Introduce un número'));
// 2. Hacer un alert de los datos introducidos: numero1, numero2, operador.
// 3. Calculo de resultado: Utilizaremos la instrucción if-else para evaluar la operación a realizar.
// 4. Realizar la operación.
// 5. Mostrar el resultado: en un alert.
// let n1 = Number(prompt("Introduce un numero"));
// let n2 = Number(prompt("Introduce un segundo numero"));
// let op = prompt("Introduce la operacion");
// let res = 0;
// alert("Has introducido " + n1 + " y " + n2 + " con la operacion " + op);
// if(op === "+"){
//   res = n1 + n2;
// }else if(op === "-"){
//   res = n1 -n2;
// }else if(op === "*"){
//   res = n1 * n2;
// }else if(op === "/"){
//   res = n1 / n2;
// }else alert("No has introducido una operacion valida");

// alert(`El resultado de la operacion ${op} es ${res}`);

// ejercicio 2 
// Calcular número secreto
// Pasos para resolver el ejercicio:
// Almacenar en una constante un número aleatorio, que será el número secreto. Dicho número estará entre 1 y 5.
// Hacer un alert del número aleatorio.
// Recogida del valor introducido por el usuario.
// const random = Math.floor(Math.random() * 5 ) + 1;
// console.log(random);
// alert("Numero secreto a adivinar " + random);
// nume2 = Number(prompt("Introduce un numero "));
// if(random === nume2){
//   console.log(nume2 + " " +  random);
//   alert("acierto");
//   }else alert("error");


// ejercicio 3
//  Calcular número secreto con 3 oportunidades
// Pasos para resolver este ejercicio:
// Almacenar en una constante un número aleatorio, que será el número secreto.
// Hacer un alert del número aleatorio.
// Los siguientes pasos los daríamos en cada una de las iteraciones de un bucle while. Estos pasos se repetirán hasta que transcurran 3 intentos o el usuario acierte el número secreto.:
// Recogida de un número mediante un prompt.
// Calculo de resultado: Utilizaremos la instrucción if-else para evaluar si el número introducido coincide con el número secreto
// Mostrar el resultado en un alert.
// Hacemos un alert de fin del juego
// const random3 = Math.floor(Math.random() * 5) +1;
// alert("numero aleatorio " + random3);
// let num3 = Number(prompt("Introduce un numero"));
// let intentos = 2
// let acierto = false;
// while(acierto === false && intentos > 0){
//   if(num3 === random3){
//     alert(`Acertaste el numero ${random3}`);
//     acierto = true;
//   }else{
//     num3 = Number(prompt("Error, introduce otro numero, te quedan " + intentos + " intentos" ));
//     intentos-=1;
//   };
// } ;
// if(intentos === 0) alert("no acertaste");

// Utilizando un do-while, evitar ejecutar dos prompt
//   const secretNum = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//   const num = Number(prompt("que numero es"));
//   alert(num);
//   let intentos = 0;
//   while (intentos < 3 || num === secretNum) {
//     if (num === secretNum) {
//       alert("has acertado");
//     } else {
//       alert("vuelvelo a intentar");
//       const num = Number(prompt("que numero es"));
//     }
//   }



// ejercicio 4 
//  Ejercicio Letra DNI
// Vamos a desarrollar una aplicación que recibirá el número identificador de tu DNI y te devolverá la correspondiente letra.
// Pasos a seguir:
// Solicitamos al usuario que intruzca su DNI sin letra y lo almacenamos en una constante.
// Hacer un alert de los datos introducidos (el dni en este caso).
// Creamos una función para obtener la letra del dni. El parámetro de entrada de esta función será el número recogido del usuario.
// La función hará las siguientes validaciones. Si la validación es incorrecta, la función devolverá el valor null.
// Que el número recogido como parámetro tenga 8 dígitos exactamente.
// Que el número recogido como parámetro sea un número (y por tanto no tenga letras).
// Si la validación ha sido correcta, la función utilizará el siguiente algoritmo para calcular la letra del DNI:
// Dividimos el valor introducido entre 23. Almacenamos el resto de la división.
// Utilizamos la función charAt para obtener la letra del DNI. Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E).
// Llamamos a la función.
// Mostrar el resultado: en un log
// const dni = Number(prompt("Introduce tu DNI sin letra"));
// alert(dni);
// const obtenerLetra = (dni) => {
//   if(String(dni).length !== 8) {
//     return null;
//   }else if(typeof dni != 'number'){
//     return null;
//   };
//   let cocienteDni = dni % 23;
//   const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
//   let miLetra = letrasDNI.charAt(cocienteDni);
//   console.log(miLetra);
//   return (`${dni}${miLetra}`);
// };
// console.log(obtenerLetra(dni));
//   const secretNum = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
//   const num = Number(prompt("que numero es"));
//   alert(num);
//   let intentos = 0;
//   while (intentos < 3 || num === secretNum) {
//     if (num === secretNum) {
//       alert("has acertado");
//     } else {
//       alert("vuelvelo a intentar");
//       const num = Number(prompt("que numero es"));
//     }
//   }

// ejercicio 5
// Coste viaje
// Vamos a hacer una aplicación que se encargará de calcular el coste de un viaje. Para ello, solicitaremos al usuario el número de noches que pasará fuera y el destino del viaje:
// Para calcular el coste final del viaje, desarrollaremos las siguientes tres funciones: costeHotel(), costeAvion(), costeAlquiler()
// Llamaremos a estas funciones utilizando el siguiente código:
// const numNoches = prompt('numero de noches');
// const destino = prompt('destino');
// const resultado1 = Number(costeHotel(numNoches));
// const resultado2 = Number(costeAvion(destino, numNoches));
// const resultado3 = Number(costeAlquilerCoche(numNoches));
// console.log("Coste hotel: " + resultado1);
// console.log("Coste viaje: ", resultado2);
// console.log("Coste alquiler coche: ", resultado3);
// console.log("Total:", resultado1 + resultado2 + resultado3);  
// A continuación te explico los cálculos que hará cada una de estas tres funciones:
// Crea una función llamada costeHotel() que recibe como parámetro el número de noches. La función debe devolver cuanto es necesario pagar teniendo en cuenta que cada noche cuesta 140 euros.
// costeAvion()
// La función costeAvion() tiene como parámetro de entrada el nombre de una ciudad y el número de noches. El coste corresponderá al indicado en la siguiente tabla, pero para una estancia de más de tres noches la agencia de viaje nos hará un descuento del 10%.
// Los costes por ciudad son los siguientes:
// «Oviedo»: 15
// «Tokyo»: 700
// «Madrid»: 90
// «Barcelona»: 90
// costeAlquilerCoche()
// La función costeAlquilerCoche() tiene como parámetro de entrada el número de noches y devolverá un coste en función de dicho parámetro, teniendo los siguientes aspectos en cuenta:
// Cada día de alquiler cuesta 40 €.
// Si alquilas un coche por 3 días o más, obtienes un descuento de 20€ sobre el total.
// Si alquilas un coche por 7 días o más, obtienes un descuento de 50€ sobre el total (no acumulable con los 20€ de haber alquilado por más de 3 días).
// const costeHotel = (noches) => {
//   return noches * 140;
// } ;
// const costeAvion = (ciudad, noches) => {
//   if(ciudad === "Oviedo"){
//    return noches > 3 ?  15 - (15 * 0.1) :  15;
//   }else if(ciudad == "Tokyo"){
//     return noches > 3 ?  700 - (700 * 0.1) : 700;
//   }else if(ciudad == "Madrid" || ciudad === "Barcelona"){
//     return noches > 3 ?  90 - (90 * 0.1) : 90;
//   };
// };
// const costeAlquilerCoche = (noches) => {
//   if(noches < 3){
//     return  noches * 40
//   }else if(noches >= 3 < 7){
//     return noches * 40 - (40 * 0.2)
//   }else noches * 40 - (40 * 0.5 );
// };
// const numNoches = prompt('numero de noches');
// const destino = prompt('destino');
// const resultado1 = Number(costeHotel(numNoches));
// const resultado2 = Number(costeAvion(destino, numNoches));
// const resultado3 = Number(costeAlquilerCoche(numNoches));
// console.log("Coste hotel: " + resultado1);
// console.log("Coste viaje: ", resultado2);
// console.log("Coste alquiler coche: ", resultado3);
// console.log("Total:", resultado1 + resultado2 + resultado3);  

