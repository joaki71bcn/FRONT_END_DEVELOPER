let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];
// ejercicio 1
// Crear un método llamado getWomansName() que muestre los nombres de todos los personajes femeninos de la película de starwars. Usaremos el método filter y el map.
const getWomansName = () => {
    const r = characters.filter(element => element.gender === "female").map(element => element.name);
    console.log('getWomansName(): ' , r);
};

// ejercicio 2
// Crear un método getSmallerPeople() que devuelva un array con los personajes de StarWars restando a cada uno de ellos diez centímetros de altura. Utilizaremos un map para recorrer el array de personajes y el spread operator para conservar las propiedades del objeto original.
const getSmallerPeople = () => {
  const r = characters.map(element => ({...element, height: element.height - 10 }));
  console.log('getSmallerPeople(): ' , r);
};
// *************   DUDA - por que ha podido restar 10 cuando eran strings?

// ejercicio 3
// Crear un método llamado sumaDePeso() que utilizando reduce, calcule la suma del peso de los personajes de starwars.
const sumaDePeso = () => {
  const r = characters.reduce((acc, element) => acc + Number(element.mass), 0);
  console.log('sumaDePeso(): ', r);
};

// ejercicio 4
// Crear un método llamado mediaDeAltura() que utilizando reduce, calcule la media de altura de los personajes de starwars.
const mediaDeAltura = () => {
  const r = characters.reduce((acc, element) => acc + Number(element.height), 0 ) / characters.length;
  console.log('mediaDeAltura(): ', r);
};

// ejercicio 5
// Crear un método llamado collectByIndex(index) que recibirá como parámetro de entrada la posición del personaje que queremos seleccionar en el array characters. Este personaje seleccionado lo añadiremos a un array declarado globalmente llamado collectedCharacters. Para esta última parte utilizaremos el método push().
const collectByIndex = (index) => {
  collectedCharacters.push(characters[index]);
  console.log('collectedByInde(): ', collectedCharacters);
};

// ejercicio 6
// Crear un método llamado collectByName(characterName) que recibirá como parámetro de entrada el nombre del personaje que queremos coleccionar y lo añadirá a un array declarado globalmente llamado collectedCharacters. Utilizaremos los métodos push() y find().
const collectByName = (characterName) => {
  const r = characters.find(element => element.name === characterName);
  collectedCharacters.push(r);
  console.log('collectByName(): ', collectedCharacters);
};

// ejercicio 7
// Crear un método llamado removeByName(characterName) que elimine del array collectedCharacters los personajes cuyo nombre sea characterName. Para ello, utilizando filter, extraeremos del array collectedCharacters los personajes cuyo nombre no coincide con el parámetro recibido.
const removeByName = (characterName) => {
  collectedCharacters = collectedCharacters.filter(element => element.name !== characterName);
  console.log('removeByName(): ', collectedCharacters);
};

// ejercicio 8
// Crear un método llamado getCharacterFilms(characterName) que reciba como parámetro el nombre de un personaje y muestra las urls de las películas en las que ha intervenido.
const getCharacterFilms = (characterName) => {
  const r = characters.find(element => element.name === characterName);
  console.log('getCharactersFilsm(): ' , r.films);
};

// ejercicio 9
// Crear un método llamado collectByName2(characterName) que recibirá como parámetro de entrada el nombre del personaje que queremos coleccionar y lo añadirá a un array declarado globalmente llamado collectedCharacters2. Cada objeto añadido a este array tendrá una propiedad llamada amount, de tal forma que si añadimos varias veces el mismo objeto, en lugar de que ese objeto aparezca varias veces, aparecerá una sola vez, pero con la propiedad amount aumentada el número de veces que fue añadido. Utilizaremos los métodos push() y find().
const collectByName2 = (characterName) => {
  const r = collectedCharacters2.find(element => element.name === characterName)
  if(r){
      r.amount +=1;
  }else {
      const s = characters.find(element => element.name === characterName);
      collectedCharacters2.push({...s, amount: 1});
  };
  console.log('collectedByName2(): ', collectedCharacters2);
  };
// *** DUDA - EN EL CONSOLELOG LSANE TODOS LOS ELEMENTOS EN LA PRIMERA LLAMADA A FUNCION

// ejercicio 10
// Crear un método llamado mediaDeAltura2() que utilizando reduce, calcule altura media de los personajes que hay en el array collectedCharacters2.
const mediaDeAltura2 = () => {
  const r = collectedCharacters2.reduce((acc, element) => acc + Number(element.height), 0) / collectedCharacters2.length;
  console.log('mediaDeAltura2(): ' ,r)
};

// ejercicio 11
// Crear un método llamado removeByName2(charactersName) que utilizando filter, obtenga a partir del array collectedCharacters2 los personajes cuyo nombre no coincide con el parámetro recibido.
const removeByName2 = (charactersName) => {
  const r = collectedCharacters2.filter(element => element.name !== charactersName);
  // collectedCharacters2 = collectedCharacters2.filter(element => element.name !== charactersName);
  console.log("removeByName2(): " , charactersName, ...r);
};
 

fetch('https://swapi.py4e.com/api/people')
.then(res => res.json())
.then(data => {
   characters = data.results;
   // Aquí ejecutaremos las llamadas a las funciones que definiremos más arriba
   console.log(characters);
   getWomansName();
   getSmallerPeople();
   sumaDePeso();
   mediaDeAltura();
   collectByIndex(0);
   collectByName('R2-D2');
   removeByName('R2-D2');
   getCharacterFilms('Obi-Wan Kenobi');
   collectByName2("R2-D2");
   collectByName2("R5-D4");
   collectByName2("R5-D4");
   mediaDeAltura2();
   removeByName2("R5-D4");
  });
