// ejercicio map
// A partir de un array con cinco nombres de persona, recórrelo con un map para obtener un nuevo array con el texto «Conozco a alguien llamado » precediendo a cada nombre.
let array = ["jose","pepe","josep","pep","bepo"];
const newarray = array.map((elem) => "Conozco a alguien llamado " + elem);
console.log(newarray);