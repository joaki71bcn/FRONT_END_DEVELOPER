import { useState } from "react";

const Dolares3 = () => {
  const [dolares, setDollars] = useState('');
  const [euros, setEuros] = useState(0);
  const convierte = () => {
    setEuros(dolares * 2);
  }

  return (
    <div>
      <input type="text" placeholder="dolares" onChange={(estado) => {setDollars(estado.target.value) }/>
      <button onClick={convierte}>Convierte</button>
      <div>{euros}</div>
    </div>
  );
};

export default Dolares3;