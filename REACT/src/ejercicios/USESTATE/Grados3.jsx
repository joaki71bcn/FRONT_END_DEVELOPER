import { useState } from "react";

const Grados3 = () => {
  const [cel , setCel] = useState(0);
  const [farenh, setFarenh] = useState(0);
  

  return (
    <div>
      <input type="text" placeholder="Celsius" onChange={(e) => setCel(Number(e.target.value))}/>
      <button onClick={() => setFarenh(cel * 9/5 +32)}>Farenheit</button>
      <div>{farenh}</div>
    </div>
  );
};

export default Grados3;