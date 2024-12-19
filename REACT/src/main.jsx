import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./ejercicios/style.css"
import App from "./EXAMEN/pizzeria";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <h1>PIZZERIA</h1>
    <App/>
   
  </StrictMode>
);