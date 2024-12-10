import { useState } from "react";

const RectanguloUsestate4 = () => {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const [resultado, setResultado] = useState(0);
  
  return (
    <div>
      <input type="text" onChange={(e) => (setInputA(Number(e.target.value)))} />
      <input type="text" onChange={(e) => (setInputB(Number(e.target.value)))}/>
      <button onClick={() => setResultado(inputA * inputB)}>Calcular</button>
      <p>{resultado}</p>
    </div>
  );
};

export default RectanguloUsestate4;