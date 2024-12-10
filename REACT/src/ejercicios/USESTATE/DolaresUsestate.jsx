import { useRef, useState } from "react";

const DolaresUsestate = () => {
  const inputRef = useRef();
  const [elemento, setElemento] = useState(0);
  const calcular = () => {
    const v = inputRef.current.value *2
   setElemento(v);
}

  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={calcular}>Calcular</button>
      <div>{elemento}</div>
    </div>
  );
};

export default DolaresUsestate;