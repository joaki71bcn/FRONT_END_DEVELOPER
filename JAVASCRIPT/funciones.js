// ejercicio 1 funciones
// Crear y llamar a una función que reciba como parámetro de entrada un valor booleano y muestre «Sí, eso es cierto» si el valor es true, y «No, eso es falso» si el valor es false.
// function check (valor){
//   if (typeof valor === "boolean"){
//   console.log(valor ? "Si, eso es cierto" : "No, eso es falso");
// } else{
//   console.log("Eso no es un valor booleano");
// }
// }
// check(false);

// ejercicio 2 funciones
// Ejercicio «hoyQuieroComer»
// Crear una función llamada «hoyQuieroComer» que recibe un parámetro “comida” cuyo valor será «garbanzos».
// Cuando llamemos a la función se mostrará un log indicándonos lo que deseamos comer.
// function hoyQuieroComer (comida){
//   console.log('Hoy quiero comer ' + comida);
// };
// hoyQuieroComer('garbanzos');


// ejercicio 3 funciones
// Crear una función llamada calcularCubo que recibe un número, calcule su cubo y muestre el resultado por consola. Llamar a la función pasándole el valor 3.
// function calcularCubo(numero){
//   console.log(numero ** 3);
// };
// calcularCubo(3);

// ejercicio 4
// Crear una función llamada calcularVelocidad que recibirá la velocidad en Km/hora y la mostrará en metros/hora.
// A la función le pasaremos como parámetro de entrada 3 kilómetros/hora y deberíamos visualizar 3000 metros/hora
// function calcularVelocidad(velocidadKmHora){
//   console.log(velocidadKmHora * 1000);
// };
// calcularVelocidad(3);

// ejercicio 5
// Crear una función llamada calcularArea que recibirá el ancho y el alto de un rectángulo y calculará su area.
// Cuando una función recibe varios parámetros, estos irán separados por coma.
// function calcularArea(ancho, alto){
//   console.log(ancho * alto);
// }
// calcularArea(10, 5);

// ejercicio 6
//  Crear y llamar a una función que recibe la base y la altura de un triángulo y calcula su área.
// Area triángulo = base*altura/2
// function areaTriangulo(base, altura){
//   console.log(base * altura /2);
// };
// areaTriangulo(10, 5);

// ejercicio 7
//  Crear estas dos funciones:
// calculaPerimetro(radio); 
// Perímetro de la circunferencia = 2*Math.PI*radio
// calculaArea(radio); 
// Area de la circunferencia = Math.PI*radio2
// function calculaPerimetro(radio){
//   console.log(2*Math.PI*radio);
// };
// function calculaArea(radio){
//   console.log(Math.PI*(radio ** 2));
// };
// calculaPerimetro(10);
// calculaArea(10);

// ejercicios 2 - 4
//  Escribe una función echo que devuelva el valor que recibe como parámetro.
// echo("Greta");
// debería devolver «Greta» y
// echo("CO2");
// debería devolver «CO2».
// function devuelveValor(parametro){
//   return parametro;
// };
// const x = devuelveValor('Greta');
// console.log(x);

// ejercicios 2 - 5
// Escribe una función saludar que reciba un parámetro y devuelva el texto «Hola <parametro>!»
// Por ejemplo,
// saludar("Ada");
// Debería devolver «Hola Ada!»
// saludar("Grace");
// Debería devolver «Hola Grace!»
// function saludar(parametro2){
//   return ('Hola ' + parametro2);
// };
// const x1 = saludar("Ada");
// console.log(x1);

// ejercicios 2 - 6
//  Modificar la siguiente función para que devuelva Inside si val está entre 10 y 20 inclusive y Outside en caso contrario.
// function test(val) {
//   // if (val) { // Cambia esta línea
// 	if (val >= 10 && val <=20)  { 
// 		return "Inside";
// 	}else {
// 		return "Outside";
// 	}
// };
// const x2 = test(21);
// console.log(x2);

// ejercicios 2 - 7
//  Añade el operador de igual para que la siguiente función devuelva Equal cuando val sea 12.
function testEqual(val) {
	// if (val) { // Cambia esta línea
  if (val === 12) { // Cambia esta línea
		return "Equal";
	}
	return "Not Equal";
};
const x3 = testEqual(12);
console.log(x3);

// ejercicio 2 - 8
// Combina las sentencias if en un único bloque de tipo if/else.
// function testElse(val) {
// 	let result = "";
// 	if (val > 5) {
// 		result = "Mayor que 5";
// 	}
// 	if (val <= 5) {
// 		result = "Menor o igual a 5";
// 	}
// 	return result;
// }
function testElse(val) {
	let result = "";
	if (val <= 5) {
		result = "Menor o igual a 5";
	} else {
		result = "Mayor que 5";
	}
	return result;
};
const x4=testElse(7);
console.log(x4);

// ejercicios 2 - 9
//  Combina las sentencias en un único bloque de tipo if/elseif/else.
// function testElse(val) {
// 	let result = "";
// 	if (val > 5) {
// 		result = "Bigger than 5";
// 	}
// 	if (val < 5) {
// 	result = "Smaller than 5";
// 	}
// 	if (val == 5) {
// 		result = "Equal to 5";
// 	}
// 	return result;
// }
function testElse(val) {
	let result = "";
	if (val > 5) {
		result = "Bigger than 5";
	}else	if (val < 5) {
	result = "Smaller than 5";
	} else {
		result = "Equal to 5";
	}
	return result;
};
const x5 = testElse(5);
console.log(x5);

// ejercicios 2 - 10
// ¿Qué valor de x se mostrará por consola?
function hola(nombre) {
	return "Hi " + nombre + "!";
}
const h1 = hola("Selva");
const h2 = hola("Pola");
const x6 = h1 +  " " + h2;
console.log(x6); // ¿Qué valor de x se mostrará en la consola?

// ejercicios 2 - 11
// ¿Qué valor de x se mostrará por consola?
function duplica(nombre) {
	return nombre + " and " + nombre;
}
const x7 = duplica("Roy");
console.log(x7); // ¿Qué valor de x se mostrará en la consola?

// ejercicios 2 - 12
// Completar la función para que se cumplan las siguientes condiciones:
function testSize(num) {
	// return "Change Me"; // Quitar esta línea y poner en su lugar la lógica pertinente (bloques de tipo if/else)
  if (num < 5) return "Tiny";
  else if (num < 10)  return "Small";
  else if (num < 15) return "Medium";
  else if (num < 20) return "Large";
  else return "Huge";
};
const x8 = testSize(30);
console.log(x8);

// ejercicios 2 - 13
// Escribe una función nand que tome como parámetros de entrada dos valores booleanos. Si ambos valores son true, debería devolver false. En cualquier otro caso, debería devolver true.
// Por ejemplo, la llamada
// nand(true, true);
// debería devolver false.
// Las llamadas:
// nand(true, false);
// nand(false, true);
// nand(false, false);
// deberían devolver true.
function nand (boo1, boo2){
  // if (boo1 && boo2) return false
  // else return true
  return boo1 && boo2 ? false : true;
};
const x9 = nand (false, true);
console.log(x9);

// ejercicios 2 - 14
// Escribe una función nor que tome como parámetros de entrada dos valores booleanos. Si alguno de los dos es false, debería devolver true. En cualquier otro caso, el valor devuelto debería ser false.
// Por ejemplo, la llamada a la función
// nor(false, false);
// debería devolver true.
// Las llamadas:
// nor(true, false);
// nor(false, true);
// nor(true, true);
// deberían devolver false.
function nor (boo1, boo2){
  // if (boo1 === false && boo2 === false) return true
  // else return false;
  return !boo1 && !boo2 ?  true :  false;
};
const x14 = nor (true, false);
console.log(x14);

// ejercicios 2 - 15
// Escribe una función xor que tome dos valores booleanos. Si ambos valores son diferentes, debería devolver true. Si ambos valores son iguales, debería devolver false.
// Por ejemplo, las llamadas:
// xor(true, false);
// xor(false, true);
// deberían devolver true.
// Las llamadas
// xor(true, true);
// xor(false, false);
// deberían devolver false.
function xor(boo1, boo2){
  // if ((boo1 === true && boo2 === false) || (boo1 === false && boo2 === true)) return true
  // else return false;
  return boo1 != boo2 ? true : false;
};
const x15 = xor(true,true );
console.log(x15);