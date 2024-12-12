import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const incrementar = () => setContador(contador +1);




  return (
    <div>
      <button onClick={incrementar}>Cuenta</button>
      <div>{contador}</div>
    </div>
  );
};

export default Contador;