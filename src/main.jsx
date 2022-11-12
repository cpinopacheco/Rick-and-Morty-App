import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { CharactersProvider } from "./context/CharactersContex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CharactersProvider>
      <RouterProvider router={router} />
    </CharactersProvider>
  </React.StrictMode>
);
