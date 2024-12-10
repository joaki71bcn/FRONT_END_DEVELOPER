import { useState } from "react";

const DolaresUsestate2 = () => {
  const [inputDollar, setInputDollar] = useState(0);

  return (
    <div>
      <input type="text" onChange={entrada => setInputDollar(entrada.target.value * 2)}/>
      <div>{inputDollar}</div>
    </div>
  );
};

export default DolaresUsestate2;