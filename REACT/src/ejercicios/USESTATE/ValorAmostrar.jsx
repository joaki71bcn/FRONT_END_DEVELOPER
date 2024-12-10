import { useState } from "react";
const ValorAmostrar = () => {

    const [inputTexto, setInputTexto] = useState('');
    const [valorMostrar, setValorMostrar] = useState('');

  return (
    <div>
      <input type="text" onChange={e => setInputTexto(e.target.value)} />
      <button onClick={() => setValorMostrar(inputTexto)}>Muestra</button>
      <p>{valorMostrar}</p>
    </div>
  );
};

export default ValorAmostrar;