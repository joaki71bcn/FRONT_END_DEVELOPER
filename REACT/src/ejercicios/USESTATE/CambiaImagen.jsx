import { useState } from "react";
 const ANIMAL_IMAGES = {
  img1: "https://pablomonteserin.com/lorem/111x111",
  img2: "https://pablomonteserin.com/lorem/222x222",
  img3: "https://pablomonteserin.com/lorem/333x333",
};

const CambiaImagen = () => {
 
  const [imagen, setImagen ] = useState('');
  
  return (
    <div>
      <button onClick={() =>setImagen(ANIMAL_IMAGES.img1)}>img1</button>
      <button onClick={() =>setImagen(ANIMAL_IMAGES.img2)}>img2</button>
      <button onClick={() =>setImagen(ANIMAL_IMAGES.img3)}>img3</button>
      <p>Imagen Seleccionada: {imagen}</p>
      <img src={imagen}  />
    </div>
  );
};

export default CambiaImagen;