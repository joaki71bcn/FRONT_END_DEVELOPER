
const calc = () => {
  let result = 0;
  // asignacion variables
  const n1 = Number(document.querySelector('#number1').value);
  const n2 = Number(document.querySelector('#number2').value);
  const simbol = document.querySelector('#oper').value;
  const out = document.querySelector('output');

  if(simbol === '+'){
    result = n1 + n2;
  }else if(simbol === '-'){
    result = n1 - n2;
  }else if(simbol === '*'){
    result = n1 * n2;
  }else if(simbol === '/'){
    result = n1 / n2;
  };

  // pintamos resultado
  out.value = result;

};

document.querySelector('button').addEventListener('click', calc);



