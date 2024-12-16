import { useState } from "react";
import texto from "./texto.json"

const Teatro = () => {
  const [linea, setLinea] = useState(0)

  return (
    <div>
      <button onClick={()=> { setLinea(linea -1), console.log(linea)}}>Anterior</button>
      <button onClick={()=> { setLinea(linea + 1), console.log(linea)}}>Siguiente</button>
      <div>{texto.map((p, index) => index === linea && <p>* {p}</p>)}</div>
      
    </div>
  );
};

export default Teatro;


    // <div>{texto.map((p, index) => index === linea && <p>* {p}</p>)}</div>