import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { CharactersProvider } from "./context/CharactersContex";
import { ChaptersProvider } from "./context/ChaptersContext";
import { FavoritesProvider } from "./context/FavoritesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CharactersProvider>
      <ChaptersProvider>
        <FavoritesProvider>
          <RouterProvider router={router} />
        </FavoritesProvider>
      </ChaptersProvider>
    </CharactersProvider>
  </StrictMode>
);
