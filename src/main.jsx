import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { CharactersProvider } from "./context/CharactersContex";
import { ChaptersProvider } from "./context/ChaptersContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CharactersProvider>
      <ChaptersProvider>
        <RouterProvider router={router} />
      </ChaptersProvider>
    </CharactersProvider>
  </React.StrictMode>
);
