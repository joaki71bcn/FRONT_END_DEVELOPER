
const pintaAmarillo = () =>{
  const amarillo = document.querySelector('.cuadro-amarillo');
  const rojo = document.querySelector('.cuadro-rojo');
  amarillo.innerHTML = "Has hecho mouse over sobre la capa 1"
  rojo.innerHTML = "";
};

const pintaRojo = () =>{
  const rojo = document.querySelector('.cuadro-rojo');
  const amarillo = document.querySelector('.cuadro-amarillo');
  rojo.innerHTML = "Has hecho mouse over sobre la capa 2";
  amarillo.innerHTML = "";
};


document.querySelector('.cuadro-rojo').addEventListener('mouseover', pintaAmarillo);
document.querySelector('.cuadro-amarillo').addEventListener('mouseover', pintaRojo);