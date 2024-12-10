import { useRef } from "react";


const Dolares2 = () => {
  const inputRef =  useRef();
  const outRef = useRef();
  const convertir = () => {
    outRef.current.innerHTML = inputRef.current.value * 2;
  }
  
  return (
    <div>
      <input type="text" ref={inputRef}></input>
      <button onClick={convertir}>Convertir</button>
      <div ref={outRef}></div>
    </div>
  );
};

export default Dolares2;