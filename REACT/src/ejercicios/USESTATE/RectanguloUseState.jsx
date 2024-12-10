import { useState } from "react";

const RectanguloUseState = () => {
  const [inputBase, setInputBase] = useState(0);
  const [inputAltura, setInputAltura] = useState(0);
  let [resultado, setResultado] = useState(0);
  const calcular = () => {
    setResultado(inputBase * inputAltura /2);
  }
  
  
  return (
    <div>
      <input type="text" onChange={e1 => setInputBase(Number(e1.target.value))} />
      <input type="text" onChange={e2 => setInputAltura(Number(e2.target.value))} />
      <button onClick={() => calcular()}>Calcular</button>
      <p>{resultado}</p>
    </div>
  );
};

export default RectanguloUseState;