import { useState } from "react";

const Rectangulo3 = () => {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');


  return (
    <div>
      <input type="text" placeholder="base" onChange={(e) => setBase(e.target.value) }/>
      <input type="text" placeholder="altura" onChange={(e) => setAltura(e.target.value)}/>
      <button>Superficie</button>
      <div>{base * altura}</div>
    </div>
  );
};

export default Rectangulo3;