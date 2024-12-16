import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./ejercicios/style.css"
import App from "./ejercicios/PROPS/App8";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <h1>libros</h1>
    <App/>
   
  </StrictMode>
);