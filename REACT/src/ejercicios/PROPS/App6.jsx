import { useState } from "react";
import Component6 from "./Component6";

const App6 = () => {

  const [resultado, setResultado] =useState(0);
  const cambiaResultado = (value) => {
    setResultado(value);
  }

  

  return (
    <div>
      <Component6 updateResultado={cambiaResultado} envioaHijo = {resultado}/>
    </div>
  );
};

export default App6;