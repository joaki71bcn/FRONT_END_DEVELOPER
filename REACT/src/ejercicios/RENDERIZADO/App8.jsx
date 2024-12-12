import { useState } from "react";

const App8 = () => {

  const [cond , setCond] = useState(0);

  return (
    <div>
      {cond %2 === 0 ? <p>Par</p> : <p>Impar</p>}
   
      <button onClick={(e) => setCond(cond +1)}>Incrementa</button><br />
         {cond}
    </div>
  );
};

export default App8;