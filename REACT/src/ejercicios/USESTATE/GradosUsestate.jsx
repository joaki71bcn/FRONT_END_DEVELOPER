import { useReducer, useRef, useState } from "react";

const GradosUsestate = () => {
  const inputRef = useRef();
  const [gradoF, setGradoF] = useState(0);
  
  const calcular = () => {
    const valor = inputRef.current.value * 9/5 +32
    setGradoF(valor);
  }


  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={calcular}>Grados F</button>
      <div>{gradoF}</div>
    </div>
  );
};

export default GradosUsestate;