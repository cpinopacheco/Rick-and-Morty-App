import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Chapters from "../pages/Chapters";
import Characters from "../pages/Characters";
import Favorites from "../pages/Favorites";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Characters />,
      },
      {
        path: "/chapters",
        element: <Chapters />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);
