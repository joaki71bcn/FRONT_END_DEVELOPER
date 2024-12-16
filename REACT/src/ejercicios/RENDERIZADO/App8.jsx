import { useState } from "react";

const App8 = () => {

  const [cond , setCond] = useState(0);

  return (
    <div>
        
      <button onClick={() => setCond(cond +1)}>Incrementa</button><br />
      {cond %2 === 0 ? <p>Par</p> : <p>Impar</p>}
         {cond}
    </div>
  );
};

export default App8;