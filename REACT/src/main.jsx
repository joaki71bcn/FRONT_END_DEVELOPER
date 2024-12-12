import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./ejercicios/style.css"
import App from "./ejercicios/PROPS/App7";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <h1>Ejercicio2 componente2</h1>
    <App/>
   
  </StrictMode>
);