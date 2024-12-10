// Definir un componente App que recogerá los grados centígrados introducidos y mostrará en pantalla los correspondientes grados Fahrenheit.

import { useRef } from "react";

// Para ello deberé multiplicar por 9/5 y sumar 32. Como todo el mundo sabe, 20 grados centígrados son 68 grados Farenheit.
const Grados = () => {
  const celsiusRef = useRef();
  const farenhaeitRef = useRef();

  const converter = () => {
    const result = celsiusRef.current.value * (9/5) + 32;
    farenhaeitRef.current.innerHTML = result;
  }

  return (
    <div>
      <input type="text" ref={celsiusRef} />
      <button onClick={converter}>Convertir</button>
      <div ref={farenhaeitRef}></div>
    </div>
  );
};

export default Grados;