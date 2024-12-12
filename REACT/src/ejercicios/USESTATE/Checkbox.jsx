import { useState } from "react";

const Checkbox = () => {

  const [check, setCheck] =useState=('Marcado')

  return (
    <div>
      <input type="checkbox" />
      <div>{check}</div>
    </div>
  );
};

export default Checkbox;