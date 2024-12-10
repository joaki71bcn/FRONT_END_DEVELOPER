import { useRef } from "react";

// Tendremos un formulario que recogerá el ancho y el alto de un rectángulo y mostrará su superficie en pantalla.
const Rectangulo = () => {
  const input1Ref = useRef();
  const input2Ref = useRef();
  const divRef = useRef();

  const calcular = () => {
    const result = input1Ref.current.value * input2Ref.current.value /2;
    divRef.current.innerHTML = result;
  }

  return (
    <div>
      <input type="text" placeholder="base" ref={input1Ref} /><br />
      <input type="text" placeholder="altura" ref={input2Ref}/><br />
      <button onClick={calcular} className="bRectangulo">Calcular</button>
      <div ref={divRef}></div>
    </div>
  );
};

export default Rectangulo;