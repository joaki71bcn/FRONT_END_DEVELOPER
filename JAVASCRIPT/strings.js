
// ejercicios strings - 1
// Escribe una función llamada longitud que reciba como parámetro de entrada una cadena de texto y devuelva el número de letras que tiene.
// Por ejemplo la siguiente llamada a la función:
// longitud("Ana");
// Debería devolver 3.
const longitud = (texto) => texto.length;
console.log(longitud("Ana"));

// ejercicios strings - 2
// Escribe una función llamada devuelvePrimeraLetra que reciba como parámetro de entrada una cadena de texto y devuelva la primera letra.
const devuelvePrimeraLetra = (texto2) => texto2.substr(0,1);
console.log(devuelvePrimeraLetra("pepit"));

// ejercicios string - 3
// Escribe una función llamada devuelveUltimaLetra que reciba como parámetro de entrada una cadena de texto y devuelva la última letra.
const devuelveUltimaLetra = (texto3) => texto3.charAt(texto3.length -1);
console.log(devuelveUltimaLetra("pepito"));

// ejercicios string - 4
// Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro de entrada una cadena de texto y un número y devuelva la letra que ocupe la posición indicada por el número.
const devuelveEnesimaLetra = (texto4, num) => texto4[num -1];
console.log(devuelveEnesimaLetra("pepito" , 5));

// ejercicios string - 5
// Utilizando el método substring imprimir las letras que van desde la posición 3 a la 7 de la cadena «wonderful day», es decir “derf”.
const sub = (texto5) => texto5.substring(3,7);
console.log(sub("wonderful day"));

// ejercicios string - 6
// Escribe una función llamada toCase que reciba como parámetro de entrada una cadena de texto y devuelva esa misma cadena de texto en minúsculas, un guión medio y de nuevo esa misma cadena de texto en mayúsculas.
// Por ejemplo, la siguiente llamada a la función:
// toCase("Pablo");
// Debería devolver: «pablo-PABLO»
const toCase = (texto6) => texto6.toLowerCase() + "-" + texto6.toUpperCase();
console.log(toCase("Pablo"));

// ejercicios string 7
// Escribe una función llamada shortcut que tome dos cadenas de texto y devuelva la inicial de cada una de las dos cadenas.
// Por ejemplo, la llamada a la función:
// shortcut('Amnesty', 'International');
// Debería devolver «AI».
const shortcut = (texto7a, texto7b) => texto7a[0] + texto7b[0];
console.log(shortcut('Amnesty', 'International'));

// ejercicios string 8
//  Escribe una función llamada firstChar que recibe como parámetro de entrada una cadena de texto y devuelva la primera letra que no sea un espacio.
// Para ello, podemos eliminar los espacios en blanco que pudiera haber al principio y al final de la cadena de texto utilizando la el método trim(). Si no sabes como funciona este método, intenta consultar primero su funcionamiento en internet y si aún así no lo entiendes, pregúntame y te lo explico :).
// Por ejemplo, la llamada a la función:
// firstChar(" Rosa Parks ");
// Debería devolver R.
const firstChar = (texto8) => texto8.trim()[0];
console.log(firstChar(" Rosa Parks "));

// ejercicios string 9
// Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos cadenas de texto y devuelva la más larga. En caso de que ambas cadenas sean igual de largas, devolveremos la correspondiente al primer parámetro de la función.
const devuelveMasLarga = (texto9a, texto9b) => texto9a.length >= texto9b.length ? texto9a : texto9b;
console.log(devuelveMasLarga("tafffffff", "queteviyo"));

// ejercicios string 10
// Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva la más larga. Si no hay una única cadena más larga, devolveremos el texto No hay una única cadena más larga.
const devuelveMasLarga2 = (texto10a, texto10b, texto10c) => {
  if (texto10a.length > texto10b.length && texto10a.length > texto10c.length ) {
    return texto10a;
  } else if(texto10b.length > texto10a.length && texto10b.length > texto10c.length ) {
    return texto10b;
  } else if(texto10c.length > texto10a.length && texto10c.length > texto10b.length) {
    return texto10c;
  } else return "No hay una única cadena más larga" ;
}
console.log(devuelveMasLarga2("aa","aaaaaaaaaa","aaa"));

// ejercicios string 11
// Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres primeras letras de cada palabra.
const generarNormbre = (texto11a, texto11b, texto11c) => {
  if(texto11a.length < 5 || texto11b.length < 5 || texto11c.length < 5){
    return "error";
  } else return texto11a.slice(0,3) + texto11b.slice(0,3) + texto11c.slice(0,3);
};
console.log(generarNormbre("cinco","siete","nueve"));

// ejercicios string 12
// Hacer una función generarNombre2 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando la última letra de cada palabra.
const generarNombre2 = (texto12a, texto12b, texto12c) => {
  if(texto12a.length < 5 || texto12b.length < 5 || texto12c.length < 5){
    return "error";
  } else return texto12a.slice(-1) + texto12b.slice(-1) + texto12c.slice(-1);
};
console.log(generarNombre2("cinco","sinta","nueve"));

// ejercicios string 13
// Hacer una función generarNombre3 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres últimas letras de cada palabra.
const generarNombre3 = (texto13a, texto13b, texto13c) => {
  if(texto13a.length < 5 || texto13b.length < 5 || texto13c.length < 5){
    return "error";
  } else return texto13a.slice(-3) + texto13b.slice(-3) + texto13c.slice(-3);
};
console.log(generarNombre3("cinco","sinta","nueve"));

// ejercicios string 14
// Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra y devuelva true si la letra esta presente en la palabra y false si no lo esta.
const tieneLetra = (texto14, l14) => texto14.indexOf(l14) != -1 ? true : false;
console.log(tieneLetra("pepito","t"));

// ejercicios string 15
// Realizar la evaluación del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas
const tieneLetra2 = (texto15, l15) => texto15.toLowerCase().indexOf(l15.toLowerCase()) != -1 ? true : false;
console.log(tieneLetra2("pepito","T"));

// ejercicios string 16
// Hacer una función crearPalabra que reciba como parámetro de entrada una letra y un número y genere una nueva palabra que tenga la letra introducida repetida tantas veces como indique el número. Para ello podrías usar un bucle for, pero existe en Javascript una función más apropiada para este objetivo. La función repeat(). Si no la conocías, investiga su uso y trata de implementarla para resolver el ejercicio.
const crearPalabra = (letra16, numero16) => letra16.repeat(numero16);
console.log(crearPalabra("a",6));

// ejercicios string 17
// Completar el ejercicio anterior haciendo que en la nueva palabra generada las letras esten en mayúsculas.
const crearPalabra2 = (letra17, numero17) => letra17.repeat(numero17).toUpperCase();
console.log(crearPalabra2("a",2));

// ejercicios string 18
// Hacer una función addGuiones que reciba como parámetro de entrada una cadena texto y devuelva una nueva cadena que tendrá un guion medio detrás de cada letra. Utilizar para ello un bucle for.
const addGuiones = (texto18) => {
  let guion = "";
  for(i=0; i<texto18.length; i++){
    guion += texto18[i] + "-";
  };
  return guion;
};
console.log(addGuiones("texto"));

// ejercicios string 19
// Hacer una función contadorDeLetras que reciba como parámetro de entrada una cadena de texto y una letra y devuelva el número de veces que esa letra esta presente en la palabra. Utilizar para ello un bucle for.
const contadorDeLetras = (texto19, letra19) => {
  let veces = 0;
  for(let i=0; i<texto19.length; i++){
    if(texto19[i] === letra19) veces +=1;
  };
  return veces;
};
console.log(contadorDeLetras("pepitoooo","o"));

// ejercicio string 20
// Realizar la evolución del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas
const contadorDeLetrasb = (texto20, letra20) => {
  let veces = 0;
  for(let i=0; i<texto20.length; i++){
    if(texto20[i].toLowerCase() === letra20.toLowerCase()) veces +=1;
  };
  return veces;
};
console.log(contadorDeLetrasb("pepitoooo","O"));

// ejercicio string 21 - ** DUDA CON ESTE, HABLA DE UN SOLO BUCLE FOR
// Hacer una función contadorDeLetras2 que reciba como parámetro de entrada dos cadenas de texto y una letra y devuelva la cadena de texto en la que dicha letra esta más presente. Utilizar para ello un bucle for. No tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas.
const contadorDeLetras2 = (texto21a, texto21b, letra21) => {
  let vecesA = 0;
  let vecesB = 0;
  // texto21a.length >= texto21b.length ? longitudTotal = texto21a.length : longitudTotal = texto21b.length;
  for(let i=0; i < texto21a.length; i++){
    if(texto21a[i].toLowerCase() === letra21.toLowerCase()) vecesA +=1;
  }
  for(let j=0; j < texto21b.length; j++){
    if(texto21b[j].toLowerCase() === letra21.toLowerCase()) vecesB +=1;
  };
  return vecesA > vecesB ? texto21a : texto21b;
};
console.log(contadorDeLetras2("abbbbbbccccccd", "aaaaabcdddd", "a"));



// ejercicios strings 22
//  Escribe una función llamada indexOfIgnoreCase que reciba dos cadenas de texto y devuelva la posición de la primera ocurrencia de la segunda cadena de texto en la primera. La función no debería tener en cuenta mayúsculas y minúsculas.
// Por ejemplo:
// indexOfIgnoreCase("bit","it");
// y
// indexOfIgnoreCase("bit","IT");
// deberían devolver 1
const indexOfIgnoreCase = (texto22a, texto22b) => {
  let posicion =-1;
  // let salir = false;
  // for(let i=0; i < texto22b.length; i++){
  //   if(salir === true) break;
  //   for(let j=0; j < texto22a.length; j++){
  //     if(texto22b[i].toLowerCase() === texto22a[j].toLowerCase()){
  //       posicion=j;
  //       salir = true;
  //       break;
  //     }
  //   }
  // }
  // return posicion >= 0 ? posicion :  "No hay coincidencia";
  for(let i=0;i < texto22b.length; i++){
    posicion = texto22a.toLowerCase().indexOf(texto22b[i].toLowerCase());
    if(posicion != -1) {
      return posicion;
    }
  }
  return posicion;
};
console.log(indexOfIgnoreCase("bita","IT"));

// ejercicios string - 23
// Escribe una función llamada firstWord que reciba como parámetro de entrada una cadena de texto y devuelva la primera palabra de esa cadena. La primera palaba de la cadena serán todos los caracteres que hay hasta el primer espacio.
// Por ejemplo:
// firstWord("see and stop");
// debería devolver «see».
const firstWord = (cadena23) => {
  let palabra = "";
  for(let i=0;i < cadena23.length; i++){
    if(cadena23[i] != " ") {
      palabra+= cadena23[i];
   }else return palabra;
  }
  return palabra;
};
console.log(firstWord("see and stop"));

// ejercicio href
// Ejercicio. Obtener el nombre de la página actual.
// Pista:
// location.href nos devuelve la url completa de la página en la que estoy.
// Necesitaremos utilizar los métodos lastIndexOf y substring.
// console.log(location.href);
// location.href = "https://pablomonteserin.com"
const nombre = location.href;
console.log(nombre.substring(nombre.lastIndexOf('/') +1));

