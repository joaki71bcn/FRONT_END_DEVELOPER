// Juego del ahorcado.
// El jugador debe acertar una palabra secreta que se muestra en pantalla utilizando guiones bajos. Para ello, se mostrará un prompt solicitando que introduzca una letra. Si la acierta, el guión bajo será sustituido por una letra. Si no, se le informará del error. Continuaremos con esta mecánica hasta que el jugador acierta la palabra secreta.


const secretWord = prompt("Introduce palabra secreta");
console.log(secretWord);

let arrayBars = [];
let letter = "";
let complete = false;
let hit = false;
let cuantas = 1;
const numLetters = secretWord.length;

for(i=0; i< numLetters; i++){
  arrayBars[i] = '_';
};
alert(arrayBars);

while(complete === false){
  hit = false;
  
  letter = prompt("Introduce una letra");
  let cuantas = 1;
  for(i=0; i<numLetters; i++){
    if(secretWord[i] === letter){
      arrayBars[i] = letter;
      alert("acertaste " + cuantas + " letra/s");
      cuantas++;
      hit = true;
    }else if(i === numLetters -1 && hit !== true){
            alert(`No hay ninguna ${letter} en la palabra secreta`)
    }
  };
  alert(arrayBars);
  complete = arrayBars.find(element => element === '_') ? complete = false : complete = true;
  if(complete === true) {
    alert(arrayBars);
    alert ("Finalizaste, fin de juego");
  }
};





