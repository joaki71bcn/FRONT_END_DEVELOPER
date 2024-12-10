import { useRef } from "react";

const Grados2 = () => {
  const inputRef = useRef();
  const divRef = useRef();
  const convertir = () => {
    divRef.current.innerHTML = inputRef.current.value * 9/5 + 32;
  }


  return (
    <div>
      <label htmlFor="gradosInput">Introduce Grados Celsius</label><br />
      <input type="text" id="gradosInput" ref={inputRef} />
      <button onClick={convertir}>Convertir</button>
      <div ref={divRef}></div>
    </div>
  );
};

export default Grados2;