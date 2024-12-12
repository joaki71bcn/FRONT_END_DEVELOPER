import { useState } from "react";
import Component7 from "./Component7";

const App7 = () => {
  const [valor, setValor] = useState(7)
  const cambiaValor = (input) => setValor(input);

  return (
    <div>
      <Component7 changeValue={cambiaValor} value={valor} />
      {valor}
    </div>
  );
};

export default App7;