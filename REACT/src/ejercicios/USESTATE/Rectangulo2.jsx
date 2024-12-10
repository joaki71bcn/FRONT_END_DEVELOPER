import { useRef } from "react";

const Rectangulo2 = () => {
const refAncho = useRef();
const refAlto = useRef();
const refOut = useRef();
const superficie = () => {
  refOut.current.innerHTML = refAncho.current.value * refAlto.current.value / 2;
}
  return (
    <div>
      <input type="text" ref={refAncho} placeholder="Ancho" />br
      <input type="text" ref={refAlto} placeholder="Alto" />
      <button onClick={superficie}>Superficie</button>
      <div ref={refOut}></div>
    </div>
  );
};

export default Rectangulo2;