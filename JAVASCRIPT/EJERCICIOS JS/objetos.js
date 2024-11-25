// // ejercicio 1
// //  Escribe un objeto llamado miPerro que tenga las siguientes propiedades: piernas, colas, amigos. Dale valor a estas propiedades y haz tres console.log(), uno por cada una de las tres propiedades
// const miPerro = {
//   piernas: 4,
//   colas: 1,
//   amigos: 10,
// };
// console.log(miPerro.piernas);
// console.log(miPerro.colas);
// console.log(miPerro.amigos);

// // ejercicio 2
// // La constante ojos debe valer la propiedad ojos del objeto testObj. Además, la constante nombre debe valer la propiedad nombre del objeto testObj.
// const testObj = {
//   ojos: "azules",
//   nombre: "blue",
// };
// const ojos = testObj.ojos;
// const nombre = testObj.nombre;
// console.log(ojos, nombre);

// // ejercicio 3
// // Utilizar la constante playerNumber para acceder a la propiedad correspondiente del objeto testObj.
// const testObj3 = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
// };
// const playerNumber = 19;
// const player = testObj3[19];   // Cambia esta línea
// console.log(player); // Debería mostrar: "Unitas"

// // ejercicio 4
// // Accede a la propiedad nombre para cambiar su valor de Coder a HappyCoder.
// const myDog = {
//     "nombre": "Coder",
//     "piernas": 4,
//     "colas": 1,
// };
// // Modifica esta línea con el código necesario
// myDog.nombre = "HappyCoder";
// console.log(myDog.nombre); // Debería mostrar: "HappyCoder"

// ejercicio 5
// 5. Convierte el bloque switch-case en un objeto llamado lookup.
// function phoneticLookup(val) {
//     let result = "";
//     // Sólo cambia el código por debajo de esta línea
//     const lookup = {
//       alpha: "Adams",
//       bravo: "Boston",
//       charlie: "Chicago",
//       delta: "Denver",
//       echo: "Easy",
//       foxtrot: "Frank",
//     };
//     switch (val) {
//         case "alpha":
//             result = "Adams";
//             break;
//         case "bravo":
//             result = "Boston";
//             break;
//         case "charlie":
//             result = "Chicago";
//             break;
//         case "delta":
//             result = "Denver";
//             break;
//         case "echo":
//             result = "Easy";
//             break;
//         case "foxtrot":
//             result = "Frank";
//     }

//     // Sólo cambia el código por encima de esta línea
//     return result;
// };
// const value = phoneticLookup("charlie")
// console.log(value); // Chicago

// ejercicio 6
// Añade un nuevo album al array myMusic. Deberá tener las mismas propiedades, pero con valores diferentes que el primer objeto del array.
// Después, añadir un console.log para mostrar el valor del nombre del artista y otro console.log para mostrar el valor del primer elemento del array de formatos del album recien añadido.
// const myMusic = [
//     {
//         "artista": "Shakira",
//         "titulo": "Piano Man",
//         "formatos": [
//             "CD",
//             "8T",
//             "LP"
//         ],
//         "premios": true
//     },
//     {
//         "artista": "Gary Moore",
//         "titulo": "Wild Frontier",
//         "formatos": [
//             "CD",
//             "LP",
//         ],
//         "premios": true
//     }
// ];
// console.log(myMusic[1].artista);
// console.log(myMusic[1].formatos[0]);

// ejercicio 7
// 7. Asigna a la constante gloveBoxContents el valor de la propiedad glovebox.
// const myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// };
// const gloveBoxContents = myStorage.car.inside["glove box"]; // Cambia esta línea
// console.log(gloveBoxContents); // Debería valer: "maps"

// ejercico 8
// 8. Asigna a la constante secondTree el valor de la propiedad list del segundo objeto del array myPlants.
// const myPlants = [
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];
// const secondTree = myPlants[1].list;
// console.log(secondTree); // Debería mostrar: ["fir", "pine", "birch"]


// ejercicio find
// Utilizando el método find, busca el usuario cuyo nombre es Juan y muestra su edad.
// const users = [
// 	{
// 		"name" : "Paco",
// 		"isActive" : false,
// 		"age": 18
// 	},
// 	{
// 		"name" : "Laura",
// 		"isActive" : false,
// 		"age": 21
// 	},
// 	{
// 		"name" : "Raquel",
// 		"isActive" : false,
// 		"age": 15
// 	},
// 	{
// 		"name" : "Juan",
// 		"isActive" : true,
// 		"age": 17
// 	},
// 	{
// 		"name" : "Alberto",
// 		"isActive" : false,
// 		"age": 50
// 	},
// 	{
// 		"name" : "Rodolfo",
// 		"isActive" : true,
// 		"age":7
// 	},
// ];
// const choosedUser = users.find(elem => elem.name === "Juan"); // Modifica esta línea para resolver el ejercicio
// console.log(choosedUser.age); // Debería mostrar: 17
// const choosedUser2 = users.find(elem => elem.age === 7);
// console.log(choosedUser2);


// ejercicio filter 1
// Recorre el array anterior para obtener un nuevo array con los usuarios activos
const users2 = [
	{
		"name" : "Paco",
		"isActive" : false,
		"edad": 18
	},
	{
		"name" : "Laura",
		"isActive" : false,
		"edad": 21
	},
	{
		"name" : "Raquel",
		"isActive" : false,
		"edad": 15
	},
	{
		"name" : "Juan",
		"isActive" : true,
		"edad": 17
	},
	{
		"name" : "Alberto",
		"isActive" : false,
		"edad": 50
	},
	{
		"name" : "Rodolfo",
		"isActive" : true,
		"edad":7
	},
];
const nuevoArray = users2.filter(elem => elem.isActive === true);
console.log(nuevoArray);
const newArray = users2.filter(elem => elem.name === "R*");
console.log(newArray);

// ejercicio filter 2
// Recorre el array anterior para obtener un array con los usuarios mayores de 18 años.
const nuevoarray2 = users2.filter(elem => elem.edad > 18);
console.log(nuevoarray2);

// ejercicio reduce
// Dado el siguiente array de datos: [1,2,3]. Calcular el valor medio utilizando la instrucción reduce.
const arrReduce = [1,2,3];
const valorMedio = arrReduce.reduce((acc, elem) => acc + elem, 0) /arrReduce.length;
console.log(valorMedio);
// const consola = arrReduce.reduce((acc, elem, i) => {
//     console.log(`Iteracción ${i}: Elemento ${elem} Acumulado: ${acc}`);
//     return acc + elem; 
// }, 0);
// console.log(consola);

// ejercicio reduce claude 1
// calcular el producto de todos los números de un array:
// const numeros = [2, 3, 4];
// // Intenta multiplicar todos los números usando reduce
// const arrNumeros = numeros.reduce((acc, elem) => acc * elem, 1);
// console.log(arrNumeros);

// ejercicio reduce claude 2
const carrito = [
    {nombre: "Laptop", cantidad: 1, precio: 1000, categoria: "electronica"},
    {nombre: "Libro", cantidad: 2, precio: 20, categoria: "libros"},
    {nombre: "Smartphone", cantidad: 1, precio: 500, categoria: "electronica"},
    {nombre: "Cuaderno", cantidad: 3, precio: 5, categoria: "papeleria"}
];
