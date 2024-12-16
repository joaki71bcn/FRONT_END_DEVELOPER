import { useState } from "react";
import texto from "./texto.json"
const Teatro3 = () => {
  const [position, setPosition] = useState(0);

  return (
    <div>
      <button onClick={() => setPosition(position -1)}>Anterior</button>
      <button onClick={() => setPosition(position +1)}>Siguiente</button>
      {texto.map((e,k) => <p key={k} style={position === k ? {background: "red"} : {}}>
        
        {e}</p>)}
    </div>
  );
};

export default Teatro3;