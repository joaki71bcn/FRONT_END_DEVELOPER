import { useState } from "react";

const Componente1 = ({ enviarPadre}) => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');

  return (
    <div>
      <input type="text" onChange={(e) => setNumero1(e.target.value)}/>
      <input type="text" onChange={(e) => setNumero2(e.target.value)}/>
      <button onClick={() => enviarPadre(numero1, numero2)}>Calcular</button>
      <p>Componente1</p>
    </div>
  );
};

export default Componente1;