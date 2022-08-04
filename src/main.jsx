import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Pokedex from "./pages/pokedex";
import MainRoutes from "./routes/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
