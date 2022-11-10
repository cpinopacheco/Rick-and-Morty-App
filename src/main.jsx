import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
