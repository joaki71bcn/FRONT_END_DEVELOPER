import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./ejercicios/App";
import "./ejercicios/style.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);