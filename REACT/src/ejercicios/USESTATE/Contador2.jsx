import { useState } from "react";

const Contador2 = () => {
  const [contador, setContador] = useState(0);
  const incrementa = () => setContador(contador +1);
  const resetea = () => setContador(0);

  return (
    <div>
      <button onClick={incrementa}>Pulsa</button>
      <div>{contador}</div>
      <button onClick={resetea}>Resetea</button>
    </div>
  );
};

export default Contador2;