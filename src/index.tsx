import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Calculator from "./components/Calculator";
import "tailwindcss/tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);
