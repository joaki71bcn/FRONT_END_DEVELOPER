import { useState } from "react";
import Componente1 from "./Componente1"
import Componente2 from "./Componente2";


const App5 = () => {

const [resultado, setResultado] = useState(0); 
const multiplica = (n1,n2) => {
  setResultado(n1*n2);
} 

  return (
    <div>
      <Componente1 enviarPadre={multiplica}/>
      <br />
      <Componente2 envioAhijo = {resultado} />
      
    </div>
  );
};

export default App5;