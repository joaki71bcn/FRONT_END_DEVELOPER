import { useRef } from "react";

// Haremos un conversor de euros a dólares. Supondremos que un euro son dos dólares. El usuario introducirá un valor en euros y se mostrará el correspondiente valor en dólares en pantalla.
const dolares = () => {
  const dolarsRef = useRef();
  const salidaRef = useRef();

  const convierte = () => {
    const euros = dolarsRef.current.value * 2;
    console.log(euros)
    salidaRef.current.innerHTML = euros;
  };

  return (
    <div>
      <input type="text" ref={dolarsRef} />
      <button onClick={convierte}>Convierte a Euros</button>
      <div ref={salidaRef}></div>
    </div>
  );
};

export default dolares;