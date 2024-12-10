import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import CambiaImagen from "./ejercicios/USESTATE/CambiaImagen"
import App from "./ejercicios/PROPS/App3"
import "./ejercicios/style.css"
import App3 from "./ejercicios/PROPS/App3";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <h4>Rectangulo Usestate 4</h4>
    <RectanguloUseState4/> */}
    {/* <h4>Cambia Imagen Tamaño</h4>
    <CambiaImagen/>
    <h4>App2 componente de componentes</h4>
    <App2/> */}
    <h1>Ejercicio props guiado</h1>
    <App3/>
   

  </StrictMode>
);