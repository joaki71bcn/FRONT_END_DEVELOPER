import { useState } from "react";
import texto from "./texto.json"
const Teatro2 = () => {

  const [puntero, setPuntero] = useState(0)

  return (
    <div>
      <button onClick={()=>setPuntero(puntero -1)}>Anterior</button>
      <button onClick={()=>setPuntero(puntero +1)}>Siguiente</button>
      <div>{texto.map((text,index) => 
        <p key={index}
          style={puntero === index ? {background: "red"}: {}}>
          {text}
        </p>
        )}</div>
    </div>
  );
};

export default Teatro2;