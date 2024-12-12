import { useState } from "react";

const Imagen2 = () => {

const ANIMAL_IMAGES = {
  img1: "https://pablomonteserin.com/lorem/111x111",
  img2: "https://pablomonteserin.com/lorem/222x222",
  img3: "https://pablomonteserin.com/lorem/333x333",
};
const [imagen ,setImagen] = useState('')
const pintaImagen = (e) =>{ setImagen(ANIMAL_IMAGES[e]);}


  return (
    <div>
      <button onClick={(e) => pintaImagen(e.target.innerHTML)}>img1</button>
      <button>img2</button>
      <button>img3</button>
      <p>Imagen seleccionada: {imagen}</p>
      <img src={imagen} alt="" />
    </div>
  );
};

export default Imagen2;